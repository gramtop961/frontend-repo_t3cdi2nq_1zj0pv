import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Lets Talk
          </h2>
          <p className="mt-3 text-white/70">Tell us about your goals and well design the rocket to get you there.</p>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto grid max-w-3xl grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-cyan-400/30 focus:ring" placeholder="Alex Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-fuchsia-400/30 focus:ring" placeholder="alex@email.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-blue-400/30 focus:ring" placeholder="What are you building?" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-white/60">We typically respond within 24 hours.</div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="relative inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <Send className="h-4 w-4 text-cyan-300" />
              <span>{sent ? 'Sent! ✨' : 'Send Message'}</span>
              <span className="absolute -inset-2 -z-10 rounded-xl bg-cyan-400/20 opacity-50 blur-md" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
