import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: 'Nebula Corp', color: 'from-cyan-500/30 to-blue-600/30' },
  { name: 'Orbit Labs', color: 'from-fuchsia-500/30 to-purple-600/30' },
  { name: 'Pulse AI', color: 'from-blue-500/30 to-indigo-600/30' },
  { name: 'HyperDrive', color: 'from-cyan-500/30 to-fuchsia-500/30' },
  { name: 'QuasarX', color: 'from-purple-500/30 to-blue-600/30' },
  { name: 'Aurora', color: 'from-cyan-500/30 to-sky-600/30' },
];

const Portfolio = () => {
  const carouselRef = useRef(null);

  return (
    <section id="work" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="mt-3 text-white/70">A glimpse of brands weve lifted into orbit.</p>
        </div>

        <motion.div
          ref={carouselRef}
          className="cursor-grab overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div drag="x" dragConstraints={{ left: -800, right: 0 }} className="flex gap-6">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, rotateY: 6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className={`relative h-48 w-72 shrink-0 select-none rounded-2xl border border-white/10 bg-gradient-to-br ${item.color} p-5 shadow-[0_20px_60px_rgba(99,102,241,0.2)]`}
              >
                <div className="absolute -inset-0.5 rounded-2xl opacity-30 blur-xl" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.6), rgba(168,85,247,0.6))' }} />
                <div className="relative z-10 flex h-full items-end">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70">Case Study</div>
                    <div className="text-xl font-semibold drop-shadow">{item.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-6 text-center text-sm text-white/60">Drag to explore the gallery</div>
      </div>
    </section>
  );
};

export default Portfolio;
