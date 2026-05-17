import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const data = [
  { name: "Priya Sharma", college: "JNTU Hyderabad", role: "SDE at Infosys", quote: "Analytics' DSA + aptitude track was the turning point. I cleared 4 placement drives in 3 weeks.", initials: "PS" },
  { name: "Rahul Verma", college: "VIT Vellore", role: "Full-Stack Dev at Accenture", quote: "Mock interviews felt brutally honest — exactly what I needed. Final HR rounds felt like a warm-up.", initials: "RV" },
  { name: "Ananya Reddy", college: "Osmania University", role: "Data Analyst at TCS", quote: "From zero confidence to leading group discussions — the communication module changed me.", initials: "AR" },
  { name: "Karthik Iyer", college: "BITS Pilani", role: "ML Engineer at Wipro", quote: "Real projects in the AI track gave me a portfolio that actually impressed recruiters.", initials: "KI" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % data.length), 5500);
    return () => clearInterval(t);
  }, []);
  const item = data[i];
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Stories from <span className="text-gradient">our students</span></>}
        />
        <div className="relative mt-12">
          <div className="relative overflow-hidden rounded-3xl glass-card p-8 md:p-12 shadow-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (<Star key={k} size={18} fill="currentColor" />))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-foreground md:text-2xl">"{item.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-sm font-bold text-primary-foreground">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.role} · {item.college}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {data.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-brand" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setI((v) => (v - 1 + data.length) % data.length)} aria-label="Previous" className="rounded-full border border-border bg-card p-2.5 text-primary transition hover:shadow-soft">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => setI((v) => (v + 1) % data.length)} aria-label="Next" className="rounded-full bg-brand p-2.5 text-primary-foreground transition hover:shadow-glow">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
