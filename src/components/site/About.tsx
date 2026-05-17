import { Target, Rocket, HeartHandshake } from "lucide-react";
import about from "@/assets/about-students.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] gradient-border shadow-soft">
              <img src={about} alt="Students learning at Analytics" loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-card p-4 shadow-soft md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Since</div>
              <div className="text-2xl font-bold text-gradient">2018</div>
              <div className="text-xs text-muted-foreground">Empowering futures</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">About Analytics</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              We build <span className="text-gradient">careers</span>, not just resumes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Analytics is a premier training & skill development company that partners with colleges to make every student
              industry-ready. From aptitude and coding to communication and placement readiness — we own the entire journey.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { Icon: Target, t: "Mission", d: "Bridge the gap between academic learning and industry demand." },
              { Icon: Rocket, t: "Vision", d: "Become India's most trusted student-to-professional accelerator." },
              { Icon: HeartHandshake, t: "Values", d: "Excellence, empathy and uncompromising student success." },
            ].map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={0.15 + i * 0.06}>
                <div className="group h-full rounded-2xl gradient-border p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-primary-foreground shadow-soft">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-primary">{t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
