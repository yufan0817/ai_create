'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface InkBlob {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
  phase: number;
}

interface GoldParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  shimmerPhase: number;
}

interface Cloud {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  speed: number;
  duration: number;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inkBlobsRef = useRef<InkBlob[]>([]);
  const goldParticlesRef = useRef<GoldParticle[]>([]);
  const animationRef = useRef<number>(0);
  const [showContent, setShowContent] = useState(false);
  const [showInkTransition, setShowInkTransition] = useState(true);
  const [logoGlowIntensity, setLogoGlowIntensity] = useState(0.4);

  useEffect(() => {
    const inkTimer = setTimeout(() => setShowInkTransition(false), 2200);
    const contentTimer = setTimeout(() => setShowContent(true), 1000);
    
    return () => {
      clearTimeout(inkTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setLogoGlowIntensity(prev => prev >= 0.7 ? 0.4 : prev + 0.05);
    }, 200);
    return () => clearInterval(glowInterval);
  }, []);

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

    const inkColors = [
      'rgba(30, 5, 5, ',
      'rgba(40, 10, 10, ',
      'rgba(50, 15, 15, ',
      'rgba(60, 20, 20, ',
      'rgba(70, 25, 25, ',
    ];

    for (let i = 0; i < 15; i++) {
      inkBlobsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 500 + 300,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.08 + 0.03,
        color: inkColors[Math.floor(Math.random() * inkColors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < 120; i++) {
      goldParticlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.3 - 0.1,
        size: Math.random() * 3 + 0.8,
        opacity: Math.random() * 0.6 + 0.2,
        life: Math.random() * 150 + 80,
        shimmerPhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      inkBlobsRef.current.forEach(blob => {
        blob.x += blob.vx + Math.sin(time + blob.phase) * 0.3;
        blob.y += blob.vy + Math.cos(time + blob.phase) * 0.3;

        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        const wobble = Math.sin(time * 0.5 + blob.phase) * 30;
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius + wobble
        );
        gradient.addColorStop(0, `${blob.color}${blob.opacity})`);
        gradient.addColorStop(0.3, `${blob.color}${blob.opacity * 0.7})`);
        gradient.addColorStop(0.6, `${blob.color}${blob.opacity * 0.4})`);
        gradient.addColorStop(0.85, `${blob.color}${blob.opacity * 0.15})`);
        gradient.addColorStop(1, 'rgba(139, 30, 30, 0)');

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius + wobble, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      goldParticlesRef.current = goldParticlesRef.current.filter(p => p.life > 0);

      goldParticlesRef.current.forEach(p => {
        p.x += p.vx + Math.sin(time * 2 + p.shimmerPhase) * 0.5;
        p.y += p.vy;
        p.vy += 0.003;
        p.life -= 0.2;
        p.opacity = (p.life / 200) * 0.7;
        p.shimmerPhase += 0.05;

        const shimmer = Math.sin(p.shimmerPhase) * 0.3 + 0.7;
        
        const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        glowGradient.addColorStop(0, `rgba(212, 175, 55, ${p.opacity * shimmer})`);
        glowGradient.addColorStop(0.3, `rgba(212, 175, 55, ${p.opacity * shimmer * 0.4})`);
        glowGradient.addColorStop(0.6, `rgba(212, 175, 55, ${p.opacity * shimmer * 0.15})`);
        glowGradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * shimmer, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 215, 110, ${p.opacity})`;
        ctx.fill();
      });

      if (goldParticlesRef.current.length < 120) {
        for (let i = 0; i < 3; i++) {
          goldParticlesRef.current.push({
            x: Math.random() * canvas.width,
            y: canvas.height + 15,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -Math.random() * 0.3 - 0.1,
            size: Math.random() * 3 + 0.8,
            opacity: Math.random() * 0.6 + 0.2,
            life: Math.random() * 150 + 80,
            shimmerPhase: Math.random() * Math.PI * 2,
          });
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const clouds: Cloud[] = [
    { x: -600, y: 50, scale: 1.2, opacity: 0.08, speed: 1, duration: 90 },
    { x: canvasRef.current?.width || 1920, y: 180, scale: 0.9, opacity: 0.06, speed: -0.8, duration: 75 },
    { x: -400, y: 350, scale: 1, opacity: 0.05, speed: 0.6, duration: 80 },
    { x: canvasRef.current?.width || 1920, y: 500, scale: 0.7, opacity: 0.04, speed: -0.5, duration: 65 },
    { x: -300, y: 650, scale: 0.8, opacity: 0.03, speed: 0.4, duration: 70 },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 z-10 pointer-events-none">
        {clouds.map((cloud, index) => (
          <motion.div
            key={index}
            animate={{ 
              x: cloud.speed > 0 ? [cloud.x, cloud.x + 2500] : [cloud.x, cloud.x - 2500],
              y: [cloud.y, cloud.y + 40, cloud.y]
            }}
            transition={{ duration: cloud.duration, repeat: Infinity, ease: 'linear' }}
            className="absolute"
            style={{ opacity: cloud.opacity }}
          >
            <svg viewBox="0 0 600 350" className="w-[600px] h-[350px]" style={{ transform: `scale(${cloud.scale})` }}>
              <path 
                d="M0 180 Q80 40 180 100 Q280 160 350 130 Q420 100 500 140 Q560 170 580 200 Q600 230 600 260 L600 300 L0 300 L0 260 Q0 230 20 200" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path 
                d="M50 200 Q130 60 230 120 Q330 180 400 150 Q470 120 530 160" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path 
                d="M100 210 Q180 70 280 130 Q380 190 450 160" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showInkTransition && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="fixed inset-0 z-50 bg-palace-red-dark flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-palace-red-dark via-palace-red to-palace-red-light" />
              
              <motion.div
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 2.8, opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-4 border-gold/20"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 4.5, opacity: 0 }}
                transition={{ duration: 1.3, delay: 0.2, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-gold/15"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0.4 }}
                animate={{ scale: 6, opacity: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border border-gold/10"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/10 via-transparent to-gold/5"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <AnimatePresence>
          {showContent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center px-6"
            >
              <motion.div
                animate={{ 
                  y: [-10, -25, -10],
                  rotate: [-0.2, 0.2, -0.2]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-8 md:mb-12 relative"
              >
                <div className="relative inline-block">
                  <motion.div
                    animate={{ opacity: [0.3, logoGlowIntensity, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -inset-12 bg-gradient-to-r from-gold/10 via-gold/25 to-gold/10 rounded-3xl blur-3xl"
                  />
                  
                  <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-gold/60 shadow-2xl">
                    <Image 
                      src="/logo.png" 
                      alt="梨园智境" 
                      width={192} 
                      height={192}
                      className="object-cover"
                    />
                  </div>
                  
                  <motion.div
                    animate={{ 
                      left: ['-150%', '150%'],
                      opacity: [0.15, 0.4, 0.15]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl"
                  />
                  
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        '0 0 30px rgba(212, 175, 55, 0.3)',
                        '0 0 60px rgba(212, 175, 55, 0.5)',
                        '0 0 30px rgba(212, 175, 55, 0.3)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif-title text-gradient-gold mb-4 md:mb-6 tracking-wider"
              >
                梨园智境
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-rice-white font-sans-text font-light tracking-[0.3em] mb-3"
              >
                AI赋能国粹传承
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg lg:text-xl text-rice-white/50 font-sans-text font-light tracking-[0.15em]"
              >
                让京剧学习走进新时代
              </motion.p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-8 h-14 border-2 border-gold/30 rounded-full flex justify-center pt-4">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-5 bg-gradient-to-b from-gold/60 to-gold/30 rounded-full"
          />
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-palace-red-dark/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-palace-red-dark/60 to-transparent z-10 pointer-events-none" />
      
      <div className="absolute top-1/4 left-10 w-1 h-32 bg-gradient-to-b from-gold/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-1 h-48 bg-gradient-to-b from-gold/15 to-transparent z-10 pointer-events-none" />
    </div>
  );
}