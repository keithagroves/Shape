import Image from "next/image";

const research = [
  {
    index: "01",
    title: "Reasoning under uncertainty",
    body: "Getting models to know what they don't know, and to act sensibly when the ground is shifting.",
  },
  {
    index: "02",
    title: "Long-horizon memory",
    body: "Systems that carry context across days and tasks instead of forgetting the moment the window fills.",
  },
  {
    index: "03",
    title: "Evaluation that means something",
    body: "Measuring the behavior you actually care about, not the proxy that happens to be easy to score.",
  },
  {
    index: "04",
    title: "Human-model interaction",
    body: "The design questions that decide whether a capable model becomes a tool people trust.",
  },
];

const products = [
  {
    index: "01",
    title: "Platform",
    body: "The core models and APIs teams build on, tuned for reliability over demos.",
  },
  {
    index: "02",
    title: "Applications",
    body: "End-to-end products for the workflows where good AI changes the day-to-day.",
  },
  {
    index: "03",
    title: "Partnerships",
    body: "We take on a small number of hard problems with teams who own the domain.",
  },
];

const principles = [
  {
    title: "Research and product at one table",
    body: "No handoff between the people who study the models and the people who ship them. Same room, same roadmap.",
  },
  {
    title: "Reliability is the feature",
    body: "A model that's right 99% of the time and honest about the other 1% beats one that's impressive and unpredictable.",
  },
  {
    title: "Slow is smooth",
    body: "We'd rather ship one thing that holds up than ten that impress for a week.",
  },
];

function SectionLabel({
  index,
  children,
  onDark = false,
}: {
  index: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] ${
        onDark ? "text-white/60" : "text-muted"
      }`}
    >
      <span className={onDark ? "text-brand" : "text-brand-deep"}>{index}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans text-foreground">
      <header className="sticky top-0 z-10 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="/" className="flex items-center" aria-label="Shape Intelligence home">
            <Image
              src="/shape-intelligence-logo-centered.svg"
              alt="Shape Intelligence"
              width={132}
              height={50}
              priority
            />
          </a>
          <nav className="hidden items-center gap-10 font-mono text-xs uppercase tracking-[0.15em] text-muted sm:flex">
            <a href="#research" className="transition-colors hover:text-foreground">Research</a>
            <a href="#products" className="transition-colors hover:text-foreground">Products</a>
            <a href="#principles" className="transition-colors hover:text-foreground">Principles</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-foreground/85"
          >
            Join us
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-foreground/10">
          {/* faint arch motif echoing the logo */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-40 h-[560px] w-[560px] text-brand opacity-[0.08]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M 30 180 C 55 60 75 20 100 20 C 125 20 145 60 170 180"
              stroke="currentColor"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </svg>

          <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:pb-32 sm:pt-40">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-brand-deep">
              AI Research &amp; Products
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Models, Products, Research
            </h1>
            <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-lg leading-8 text-muted">
                Shape Intelligence is an AI lab and product studio. The gap between a promising
                model and a tool someone reaches for every day is where most of the work lives, so
                that&apos;s where we spend our time.
              </p>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="#research"
                  className="flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-white transition-colors hover:bg-foreground/85"
                >
                  Read the research
                </a>
                <a
                  href="#products"
                  className="flex h-11 items-center justify-center rounded-full border border-foreground/15 px-6 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-foreground/[.03]"
                >
                  See the work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research — index list, paper style */}
        <section id="research" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div>
                <SectionLabel index="01">Research</SectionLabel>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  The parts of intelligence without clean answers yet.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-muted">
                  Reasoning, memory, and how systems stay reliable once they leave the benchmark.
                  Everything here is chosen because a product downstream needs the answer.
                </p>
              </div>
              <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
                {research.map((item) => (
                  <li key={item.index} className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr] sm:gap-6">
                    <span className="font-mono text-sm text-muted transition-colors group-hover:text-brand-deep">
                      {item.index}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-1.5 max-w-lg text-sm leading-6 text-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-20 border-t border-foreground/10 bg-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <SectionLabel index="02">Products</SectionLabel>
                <h2 className="mt-6 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                  Research earns its keep when it ships.
                </h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-muted">
                Everything we learn feeds directly into tools people put in front of real work.
              </p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:grid-cols-3">
              {products.map((item) => (
                <div key={item.title} className="group flex flex-col bg-white p-8 transition-colors hover:bg-zinc-50">
                  <span className="font-mono text-xs text-muted">{item.index}</span>
                  <div className="mt-10 h-1 w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-14" />
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles — dark editorial band */}
        <section id="principles" className="scroll-mt-20 bg-foreground text-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <SectionLabel index="03" onDark>
              Principles
            </SectionLabel>
            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-snug tracking-tight sm:text-5xl">
              Small team. Long attention span.
            </h2>
            <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-brand">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-16 max-w-2xl border-t border-white/15 pt-10 text-lg leading-8 text-white/80">
              That&apos;s the whole idea behind the name: taking raw capability and giving it a
              shape someone can hold.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto w-full max-w-6xl px-6 py-28">
            <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
              <div>
                <SectionLabel index="04">Contact</SectionLabel>
                <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Building something, or want to?
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-muted">
                  Tell us what you&apos;re working on. We read everything, and we answer the ones we
                  can help with.
                </p>
              </div>
              <a
                href="mailto:hello@shapeintelligence.ai"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-white transition-colors hover:bg-foreground/85"
              >
                hello@shapeintelligence.ai
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-8 px-6 py-10 sm:flex-row sm:items-center">
          <Image src="/shape-intelligence-logo-centered.svg" alt="Shape Intelligence" width={110} height={42} />
          <nav className="flex gap-8 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            <a href="#research" className="transition-colors hover:text-foreground">Research</a>
            <a href="#products" className="transition-colors hover:text-foreground">Products</a>
            <a href="#principles" className="transition-colors hover:text-foreground">Principles</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Shape Intelligence
          </p>
        </div>
      </footer>
    </div>
  );
}
