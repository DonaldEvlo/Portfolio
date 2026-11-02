// Génère public/CV_Donald_William_Kodjo_EVLO.pdf à partir de cv.html.
// Prérequis : `npm run build` (fait par `npm run cv`) et Google Chrome ou Edge installé.
// Chemin du navigateur personnalisable via la variable d'environnement CHROME_PATH.
import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { preview } from 'vite';

const PDF_NAME = 'CV_Donald_William_Kodjo_EVLO.pdf';

const browserCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browserPath = browserCandidates.find((p) => p && existsSync(p));
if (!browserPath) {
  console.error('Aucun navigateur Chrome/Edge trouvé. Définissez CHROME_PATH.');
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Garde-fou : ne jamais bloquer indéfiniment (navigateur ou serveur qui ne répond plus).
setTimeout(() => {
  console.error('Génération du CV interrompue : délai de 2 minutes dépassé.');
  process.exit(1);
}, 120_000).unref();

const server = await preview({ preview: { port: 4180, strictPort: true, open: false } });
const url = `${server.resolvedUrls.local[0]}cv.html`;

// Profil Chrome réutilisé d'un lancement à l'autre (ignoré par git via node_modules).
const profileDir = resolve('node_modules', '.cache', 'cv-chrome');
mkdirSync(profileDir, { recursive: true });
rmSync(join(profileDir, 'DevToolsActivePort'), { force: true });
const browser = spawn(
  browserPath,
  ['--headless=new', '--disable-gpu', '--remote-debugging-port=0', `--user-data-dir=${profileDir}`, 'about:blank'],
  { stdio: 'ignore' },
);

try {
  // Chrome choisit un port libre et l'écrit dans DevToolsActivePort.
  let target;
  for (let i = 0; i < 100 && !target; i++) {
    try {
      const port = readFileSync(join(profileDir, 'DevToolsActivePort'), 'utf8').split('\n')[0];
      target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
    } catch {
      await sleep(200);
    }
  }
  if (!target) throw new Error('Le navigateur headless ne répond pas.');

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));

  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    pending.get(msg.id)?.(msg);
    pending.delete(msg.id);
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const n = ++id;
      pending.set(n, (msg) => (msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)));
      ws.send(JSON.stringify({ id: n, method, params }));
    });

  await send('Page.navigate', { url });
  // Attend le rendu React et le chargement des polices.
  await send('Runtime.evaluate', {
    expression: `new Promise(async (resolve) => {
      while (!document.querySelector('#root > *')) await new Promise((r) => setTimeout(r, 50));
      await document.fonts.ready;
      resolve(true);
    })`,
    awaitPromise: true,
  });

  // La page A4 masque ce qui dépasse : refuser un CV tronqué plutôt que le publier.
  const { result: overflow } = await send('Runtime.evaluate', {
    expression: `(() => { const page = document.querySelector('#root > *'); return page.scrollHeight - page.clientHeight; })()`,
    returnByValue: true,
  });
  if (overflow.value > 0) {
    throw new Error(`Le CV dépasse la page A4 de ${overflow.value}px : raccourcir le contenu de src/data/profile.ts.`);
  }

  const { data } = await send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  });

  const out = join('public', PDF_NAME);
  writeFileSync(out, Buffer.from(data, 'base64'));
  copyFileSync(out, join('dist', PDF_NAME));
  console.log(`CV généré : ${out}`);

  // Chrome peut fermer la connexion sans répondre : ne pas attendre la réponse.
  await Promise.race([send('Browser.close').catch(() => {}), sleep(1000)]);
  ws.close();
} finally {
  const exited = new Promise((r) => browser.once('exit', r));
  browser.kill();
  await Promise.race([exited, sleep(3000)]);
  await Promise.race([server.close(), sleep(2000)]);
}

// Le serveur de preview peut garder des connexions keep-alive ouvertes.
process.exit(0);
