import { CheckCircle2, GraduationCap, IndianRupee, UserCog, Sparkles, Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const reasons = [
  { Icon: Briefcase, t: "Placement-focused learning", d: "Every module ties back to real recruiter expectations." },
  { Icon: GraduationCap, t: "Industry experts", d: "Trainers with 8+ years at MNCs and product startups." },
  { Icon: Sparkles, t: "Practical training", d: "Project-first pedagogy with real-world case studies." },
  { Icon: IndianRupee, t: "Affordable programs", d: "Student-friendly pricing with EMI and scholarship options." },
  { Icon: UserCog, t: "Personalized mentorship", d: "1:1 weekly check-ins tailored to your career goals." },
  { Icon: CheckCircle2, t: "Modern learning approach", d: "Bite-sized lessons, assessments and live cohorts." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The <span className="text-gradient">unfair advantage</span> students deserve</>}
        />

        <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-brand p-[1px] transition-transform duration-500 hover:-translate-y-1">
                <div className="relative flex h-full flex-col rounded-3xl bg-card p-6">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <r.Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-primary">{r.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
