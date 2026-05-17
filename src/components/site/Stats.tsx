import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Building2, TrendingUp, UserCheck } from "lucide-react";

const stats = [
  { Icon: Users, value: 5000, suffix: "+", label: "Students Trained" },
  { Icon: Building2, value: 100, suffix: "+", label: "Partner Colleges" },
  { Icon: TrendingUp, value: 95, suffix: "%", label: "Placement Success" },
  { Icon: UserCheck, value: 50, suffix: "+", label: "Industry Mentors" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand p-1 shadow-glow">
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_50%_0%,white,transparent)]" />
          <div className="relative grid gap-px overflow-hidden rounded-[calc(2rem-4px)] bg-brand sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="group relative bg-brand p-8 text-center text-primary-foreground">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                  <s.Icon size={24} />
                </div>
                <div className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
