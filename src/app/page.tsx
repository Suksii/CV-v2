import { PrintButton } from "@/components/print-button";
import { ContactIcon } from "@/components/contact-icon";
import {
  person,
  contact,
  skillGroups,
  experience,
  education,
} from "@/lib/cv-data";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-ink">
      {children}
      <span className="h-px flex-1 bg-rule" />
    </h2>
  );
}

function SideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:py-12 print:p-0">
      <PrintButton />

      <div className="sheet rise mx-auto max-w-[850px] overflow-hidden rounded-2xl bg-sheet shadow-xl shadow-black/10">
        {/* ---------- header ---------- */}
        <header className="rise rise-1 border-b-2 border-accent px-7 pb-6 pt-8 sm:px-10">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-[2.75rem]">
            {person.name}
          </h1>
          <p className="mt-1.5 font-display text-base font-medium text-accent sm:text-lg">
            {person.titles.join("  ·  ")}
          </p>
          <p className="mt-4 max-w-[65ch] text-[13.5px] leading-relaxed text-ink-soft">
            {person.summary}
          </p>
        </header>

        {/* ---------- body ---------- */}
        <div className="grid sm:grid-cols-[256px_1fr]">
          {/* sidebar */}
          <aside className="rise rise-2 space-y-8 border-b border-rule bg-accent-soft/50 px-7 py-7 sm:border-b-0 sm:border-r">
            <section>
              <SideTitle>Contact</SideTitle>
              <ul className="space-y-2.5">
                {contact.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-[12.5px]">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-accent/10 text-[11px] text-accent">
                      <ContactIcon icon={item.icon} />
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="break-all font-medium text-ink underline-offset-2 hover:text-accent hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-ink-soft">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SideTitle>Skills</SideTitle>
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.title} className="avoid-break">
                    <h3 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-accent/20 bg-sheet px-2 py-0.5 text-[11.5px] font-medium text-ink"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="avoid-break">
              <SideTitle>Education</SideTitle>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.degree} className="text-[13px]">
                    <p className="font-semibold leading-snug">{item.degree}</p>
                    <p className="mt-0.5 leading-snug text-ink-soft">{item.school}</p>
                    <p className="mt-0.5 text-[12px] font-medium text-accent">{item.date}</p>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* main column */}
          <div className="rise rise-3 px-7 py-7 sm:px-9">
            <section>
              <SectionTitle>Work Experience</SectionTitle>
              <div className="space-y-6">
                {experience.map((job) => (
                  <article
                    key={`${job.position}-${job.company}`}
                    className="relative border-l-2 border-rule pl-5"
                  >
                    <span className="absolute -left-[5px] top-[5px] h-2 w-2 rounded-full bg-accent" />
                    <div className="avoid-break">
                      <p className="text-[12px] font-semibold uppercase tracking-wider text-accent">
                        {job.date}
                      </p>
                      <h3 className="mt-0.5 font-display text-[17px] font-bold leading-snug">
                        {job.position}
                        <span className="font-sans text-[14px] font-medium text-ink-soft">
                          {"  ·  "}
                          {job.company}
                        </span>
                      </h3>
                    </div>

                    {job.description && (
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                        {job.description}
                      </p>
                    )}

                    {job.intro && (
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                        {job.intro}
                      </p>
                    )}
                    {job.highlights && (
                      <ul className="mt-2 space-y-1.5">
                        {job.highlights.map((h) => (
                          <li
                            key={h.name}
                            className="avoid-break flex gap-2 text-[13px] leading-relaxed text-ink-soft"
                          >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>
                              <b className="font-semibold text-ink">{h.name}</b> — {h.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.outro && (
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                        {job.outro}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <p className="no-print mx-auto mt-6 max-w-[850px] text-center text-xs text-ink-soft/70">
        Tip: use “Print / Save as PDF” — the document is formatted for A4.
      </p>
    </main>
  );
}
