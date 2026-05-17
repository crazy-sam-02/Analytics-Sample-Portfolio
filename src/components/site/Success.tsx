import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const milestones = [
  { year: "2018", title: "Founded Analytics", body: "Launched with a single coding cohort in Hyderabad." },
  { year: "2020", title: "10 College Partnerships", body: "Expanded across Telangana and Andhra Pradesh campuses." },
  { year: "2022", title: "1,000+ Placements", body: "Students placed at Infosys, TCS, Wipro, Accenture and more." },
  { year: "2023", title: "Tech Workshops Nationwide", body: "Hosted 200+ on-campus workshops & hackathons." },
  { year: "2024", title: "5,000+ Students Trained", body: "Scaled to 100+ partner colleges and 50+ industry mentors." },
  { year: "2025", title: "AI & Industry 4.0 Tracks", body: "Launched cutting-edge AI, ML and cloud certifications." },
];

export function Success() {
  return (
    <section id="success" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Success Timeline"
          title={<>Milestones that <span className="text-gradient">shaped futures</span></>}
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <div className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">{m.year}</div>
                    <h3 className="mt-2 text-xl font-semibold text-primary">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.body}</p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand ring-4 ring-background md:left-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
