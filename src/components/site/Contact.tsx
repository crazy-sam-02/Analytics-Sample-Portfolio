import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function Field({ label, type = "text", textarea }: { label: string; type?: string; textarea?: boolean }) {
  const [v, setV] = useState("");
  const id = label.toLowerCase().replace(/\s/g, "-");
  const filled = v.length > 0;
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id} value={v} onChange={(e) => setV(e.target.value)} rows={4}
          className="peer block w-full resize-none rounded-xl border border-border bg-card px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-soft"
          placeholder=" "
        />
      ) : (
        <input
          id={id} type={type} value={v} onChange={(e) => setV(e.target.value)}
          className="peer block w-full rounded-xl border border-border bg-card px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-soft"
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary ${filled ? "top-2 text-xs" : "top-4 text-sm"}`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Thanks! We'll get back to you within 24 hours."); };
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build your <span className="text-gradient">career story</span></>}
          description="Reach out for cohort details, college tie-ups or general inquiries — we typically reply within a few hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { Icon: Mail, t: "Email us", v: "hello@analytics.training" },
                { Icon: Phone, t: "Call us", v: "+91 98765 43210" },
                { Icon: MapPin, t: "Visit us", v: "Hi-Tech City, Hyderabad, India" },
              ].map(({ Icon, t, v }) => (
                <div key={t} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                    <div className="text-base font-semibold text-primary">{v}</div>
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Analytics location"
                  src="https://www.google.com/maps?q=Hi-Tech%20City%20Hyderabad&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>

              <div className="flex gap-3">
                {[Instagram, Linkedin, Youtube, Facebook].map((I, k) => (
                  <a key={k} href="#" aria-label="Social" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-primary transition-all hover:-translate-y-1 hover:bg-brand hover:text-primary-foreground">
                    <I size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="relative overflow-hidden rounded-3xl glass-card p-6 shadow-soft md:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand opacity-20 blur-3xl" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" />
                <Field label="Email Address" type="email" />
                <Field label="Phone Number" type="tel" />
                <Field label="College / Institution" />
                <div className="sm:col-span-2"><Field label="Your message" textarea /></div>
              </div>
              <button
                type="submit"
                className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="relative z-10">Send message</span>
                <Send size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
