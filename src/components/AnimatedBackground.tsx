import { useEffect, useRef } from 'react';

const GLYPHS = '01アイウエオカキクケコサシスセソタチツテト{}[]<>/$#';
const FONT_SIZE = 16;
const FRAME_MS = 55;

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let drops: number[] = [];
    let frame = 0;
    let last = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / FONT_SIZE) }, () => Math.random() * -50);
    };

    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      if (time - last < FRAME_MS) return;
      last = time;

      ctx.fillStyle = 'rgba(5, 7, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      drops.forEach((y, i) => {
        ctx.fillStyle = i % 7 === 0 ? '#22d3ee' : '#4ade80';
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], i * FONT_SIZE, y * FONT_SIZE);
        drops[i] = y * FONT_SIZE > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-[0.07]" />
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-cyber/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-dev/5 blur-[120px]" />
    </div>
  );
}
