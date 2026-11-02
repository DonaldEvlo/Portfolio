import { About } from './components/About';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { profile } from './data/profile';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/8 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 font-mono text-xs text-slate-500 sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </p>
          <p>
            <span className="text-cyber">$</span> built with React · Vite · Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
