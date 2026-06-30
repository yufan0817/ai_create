'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  hue: number;
}

interface InkDrop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  layers: { offsetX: number; offsetY: number; delay: number; progress: number }[];
}

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

export default function MouseEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const inkDropsRef = useRef<InkDrop[]>([]);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseRef.current = { ...mouseRef.current };
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 0.8,
      });

      if (trailRef.current.length > 30) {
        trailRef.current.shift();
      }

      const particleCount = Math.min(Math.floor(distance / 8), 4);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
        const speed = Math.random() * 2 + 1;
        
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 4 + 1.5,
          opacity: Math.random() * 0.6 + 0.4,
          life: 1,
          hue: 45 + Math.random() * 15,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const layers: InkDrop['layers'] = [];
      for (let i = 0; i < 5; i++) {
        layers.push({
          offsetX: (Math.random() - 0.5) * 20,
          offsetY: (Math.random() - 0.5) * 20,
          delay: i * 0.15,
          progress: 0,
        });
      }

      inkDropsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.random() * 80 + 60,
        opacity: 0.5,
        layers,
      });

      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15 + Math.random() * 0.3;
        const speed = Math.random() * 3 + 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 5 + 2,
          opacity: Math.random() * 0.7 + 0.3,
          life: 1,
          hue: 45 + Math.random() * 15,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailRef.current.forEach((point, index) => {
        const progress = index / trailRef.current.length;
        const size = 3 + progress * 5;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );
        gradient.addColorStop(0, `rgba(212, 175, 55, ${point.opacity * progress * 0.3})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();

        point.opacity -= 0.02;
      });
      
      trailRef.current = trailRef.current.filter(p => p.opacity > 0);

      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 0.012;
        p.opacity = p.life * 0.6;
        p.size *= 0.99;

        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${p.opacity})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 50%, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      inkDropsRef.current = inkDropsRef.current.filter(d => d.opacity > 0);
      
      inkDropsRef.current.forEach(d => {
        d.radius += 3;
        d.opacity -= 0.008;

        d.layers.forEach(layer => {
          if (layer.progress < 1) {
            layer.progress += 0.02;
          }
          
          const currentRadius = d.radius * layer.progress;
          const currentOpacity = d.opacity * (1 - layer.delay * 2) * layer.progress;
          
          if (currentOpacity > 0) {
            const gradient = ctx.createRadialGradient(
              d.x + layer.offsetX, d.y + layer.offsetY, 0,
              d.x + layer.offsetX, d.y + layer.offsetY, currentRadius
            );
            
            const noise = Math.sin(Date.now() * 0.001 + layer.offsetX) * 0.1;
            
            gradient.addColorStop(0, `rgba(80, 20, 20, ${currentOpacity * (0.9 + noise)})`);
            gradient.addColorStop(0.3, `rgba(100, 25, 25, ${currentOpacity * 0.6})`);
            gradient.addColorStop(0.6, `rgba(120, 30, 30, ${currentOpacity * 0.3})`);
            gradient.addColorStop(1, `rgba(139, 30, 30, 0)`);

            ctx.beginPath();
            ctx.arc(d.x + layer.offsetX, d.y + layer.offsetY, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        });

        const goldRingRadius = d.radius * 0.8;
        if (goldRingRadius > 5) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, goldRingRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212, 175, 55, ${d.opacity * 0.2})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
    />
  );
}