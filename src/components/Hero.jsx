import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(relX);
      y.set(relY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
    >
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking for pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 blur-3xl" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <motion.h1
          style={{ rotateX, rotateY }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95] bg-gradient-to-br from-cyan-300 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]"
        >
          1 Thumb
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/80"
        >
          Boost Your Brand with Just One Thumb.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur transition hover:from-cyan-500/30 hover:to-fuchsia-500/30 focus:outline-none"
          >
            <span className="relative">
              Get Started
              <span className="absolute -inset-1 -z-10 rounded-full bg-cyan-400/30 blur-md transition-opacity group-hover:opacity-80" />
            </span>
          </a>
        </motion.div>

        {/* Floating keywords */}
        <div className="pointer-events-none mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {['SEO', 'Social', 'Ads', 'Analytics'].map((word, i) => (
            <motion.div
              key={word}
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[inset_0_0_30px_rgba(59,130,246,0.15)] backdrop-blur"
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
