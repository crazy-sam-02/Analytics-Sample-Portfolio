import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
