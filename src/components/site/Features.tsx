import { Users, Radio, Hammer, Trophy, ClipboardCheck, Award, Handshake, BookOpen, Compass } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  { Icon: Users, t: "Expert Trainers", d: "Mentors from top product companies." },
  { Icon: Radio, t: "Live Interactive Sessions", d: "Real-time doubt solving & engagement." },
  { Icon: Trophy, t: "Coding Challenges", d: "Daily problems and weekend contests." },
  { Icon: ClipboardCheck, t: "Weekly Assessments", d: "Track progress with data-driven insights." },
  { Icon: Award, t: "Certifications", d: "Industry-recognized completion credentials." },
  { Icon: Handshake, t: "Placement Assistance", d: "Dedicated cell, drives & referrals." },
  { Icon: BookOpen, t: "Industry Curriculum", d: "Updated with the latest hiring trends." },
  { Icon: Compass, t: "Student Mentorship", d: "1:1 guidance from career to compensation." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Features"
          title={<>Everything you need to <span className="text-gradient">land the offer</span></>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.05}>
              <div className="group relative flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-brand opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-50" />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-primary-foreground">
                    <p.Icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
