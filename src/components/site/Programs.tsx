import { Brain, Code2, Globe, Network, Briefcase, MessageCircle, Mic2, FileText, Cpu, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const programs = [
  { Icon: Brain, t: "Aptitude Training", d: "Quant, logical reasoning & verbal mastery for every placement test." },
  { Icon: Code2, t: "Coding & Programming", d: "Hands-on C, C++, Java & Python from fundamentals to fluency." },
  { Icon: Network, t: "DSA", d: "Crack FAANG-level problems with structured patterns & weekly challenges." },
  { Icon: Briefcase, t: "Placement Prep", d: "End-to-end campus placement readiness with mock drives." },
  { Icon: MessageCircle, t: "Communication", d: "English fluency, group discussions and corporate etiquette." },
  { Icon: Mic2, t: "Mock Interviews", d: "1:1 technical & HR interviews with personalized feedback." },
  { Icon: FileText, t: "Resume Building", d: "ATS-optimized resumes and LinkedIn profile makeovers." },
  { Icon: Cpu, t: "Technical Training", d: "Industry stacks: cloud, data, AI/ML & emerging tech." },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 md:py-32">
      <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Programs"
          title={<>Career-defining <span className="text-gradient">training programs</span></>}
          description="Choose from nine intensive tracks designed with industry leaders and trusted by top recruiters."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <p.Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-80 transition-all hover:opacity-100">
                    Learn more
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
