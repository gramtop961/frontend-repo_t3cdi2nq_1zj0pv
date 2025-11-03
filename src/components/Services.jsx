import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, BarChart3, Rocket, Search } from 'lucide-react';

const services = [
  {
    title: 'SEO Optimization',
    icon: Search,
    desc: 'Technical audits, content strategy, and link-building to grow organic traffic.',
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    title: 'Paid Ads',
    icon: Megaphone,
    desc: 'High-ROAS campaigns across Google, Meta, and programmatic networks.',
    gradient: 'from-fuchsia-500/20 to-purple-600/20',
  },
  {
    title: 'Growth Analytics',
    icon: BarChart3,
    desc: 'Tracking, dashboards, and insights to make smarter, faster decisions.',
    gradient: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    title: 'Launch & Scale',
    icon: Rocket,
    desc: 'Positioning, funnels, and lifecycle automation to go from 0 → 1 → ∞.',
    gradient: 'from-cyan-500/20 to-fuchsia-500/20',
  },
];

const ServiceCard = ({ item, i }) => {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} p-6 text-white shadow-[0_10px_40px_rgba(59,130,246,0.15)] backdrop-blur`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
          <Icon className="h-7 w-7 text-cyan-300 drop-shadow" />
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/75">{item.desc}</p>
      <div className="mt-6 flex items-center gap-2 text-cyan-300/80">
        <span className="h-1 w-1 rounded-full bg-cyan-300/80" />
        <span className="h-1 w-1 rounded-full bg-fuchsia-300/80" />
        <span className="h-1 w-1 rounded-full bg-blue-300/80" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative z-10 w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            About 1 Thumb
          </h2>
          <p className="mt-4 text-white/70">
            We are a future-forward digital marketing studio blending creative storytelling with
            performance science. From fandom-worthy brands to full-funnel growth, we do it with one
            simple principle: make every interaction worthy of a thumbs up.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} item={s} i={i} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
