import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.png";

const phrases = ["Industry-Ready Professionals.", "Confident Communicators.", "Job-Ready Engineers.", "Future Tech Leaders."];

function useTyping() {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = phrases[pi];
    const step = del ? 35 : 70;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (!next) { setDel(false); setPi((pi + 1) % phrases.length); }
      }
    }, step);
    return () => clearTimeout(t);
  }, [text, del, pi]);
  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl animate-[blob_18s_ease-in-out_infinite]" />
        <div className="absolute top-20 -right-32 h-[520px] w-[520px] rounded-full bg-accent/30 blur-3xl animate-[blob_22s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-primary-glow/20 blur-3xl animate-[blob_26s_ease-in-out_infinite]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.92_0.015_255/0.5)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0.015_255/0.5)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* Floating particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent opacity-50"
            style={{ left: `${(i * 73) % 100}%`, top: `${(i * 37) % 90}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles size={14} className="text-accent" />
            #1 Training & Placement Partner for Colleges
          </span>

          <h1 className="mt-6 min-h-[3.2em] text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:min-h-[2.1em] md:text-6xl lg:text-7xl">
            Transforming Students Into <br className="hidden md:block" />
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 bg-primary animate-[blink_1s_steps(2)_infinite]" />
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Analytics empowers college students with aptitude, coding, communication and
            interview mastery — delivered by industry experts through real projects,
            assessments and placement-focused learning.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#programs"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <span className="relative z-10">Explore Programs</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:shadow-soft"
            >
              Start Learning
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              { n: "5K+", l: "Students Trained" },
              { n: "100+", l: "Partner Colleges" },
              { n: "95%", l: "Placement Rate" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gradient">{s.n}</span>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden md:block lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/30 via-primary-glow/20 to-accent/30 blur-3xl" />
            <motion.img
              src={heroImg}
              alt="Analytics learning dashboard"
              className="relative w-full drop-shadow-2xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              width={1280}
              height={1024}
            />
            {/* Floating chips */}
            <motion.div
              className="absolute -left-4 top-12 hidden rounded-2xl glass-card px-4 py-3 shadow-soft md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-xs text-muted-foreground">Today</div>
              <div className="text-sm font-semibold text-primary">+247 placements</div>
            </motion.div>
            <motion.div
              className="absolute -right-2 bottom-10 hidden rounded-2xl glass-card px-4 py-3 shadow-soft md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-xs text-muted-foreground">Live cohort</div>
              <div className="text-sm font-semibold text-primary">1,284 learning now</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown />
        </motion.div>
      </a>
    </section>
  );
}
