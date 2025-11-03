import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Music, Music2 } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  const [dark, setDark] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  // Theme toggle attaches/removes the dark class on html
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  // Handle music playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.volume = 0.35;
      const play = audio.play();
      if (play && typeof play.catch === 'function') {
        play.catch(() => {});
      }
    } else {
      audio.pause();
    }
  }, [musicOn]);

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Sticky top bar with brand + toggles */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur">
        <a href="#home" className="flex items-center gap-2">
          <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-black font-black">
            <span className="text-sm">1</span>
            <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-cyan-300/80 blur-[2px]" />
          </div>
          <span className="font-semibold tracking-wide">1 Thumb</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            aria-label="Toggle background music"
            onClick={() => setMusicOn((m) => !m)}
            className={`rounded-xl border border-white/10 bg-white/5 p-2 ${musicOn ? 'text-cyan-300' : 'text-white/80'} hover:text-white`}
          >
            {musicOn ? <Music2 className="h-5 w-5" /> : <Music className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Hidden audio element with a chill ambient loop (royalty-free) */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_0d5a2f42d4.mp3?filename=future-technology-ambient-110397.mp3"
      />

      {/* Main sections */}
      <main className="scroll-smooth">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-black/80 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} 1 Thumb — Crafted with love for the future.
      </footer>
    </div>
  );
};

export default App;
