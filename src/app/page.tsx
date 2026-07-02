import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans text-foreground">
      <header className="sticky top-0 z-10 border-b border-black/[.06] bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center" aria-label="Shape Intelligence home">
            <Image src="/shape-intelligence-logo-centered.svg" alt="Shape Intelligence" width={150} height={57} priority />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted sm:flex">
            <a href="#research" className="hover:text-foreground">Research</a>
            <a href="#products" className="hover:text-foreground">Products</a>
            <a href="#approach" className="hover:text-foreground">Approach</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand-solid px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-solid-dark"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-brand-solid">
            AI research &amp; products
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            We build the models, and the products people use them through.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Shape Intelligence is an AI lab and product studio. We do the research, then we ship
            the thing. The gap between a promising model and a tool someone reaches for every day is
            where most of the work lives, so that&apos;s where we spend our time.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-white transition-colors hover:bg-black/80"
            >
              See what we&apos;re building
            </a>
            <a
              href="#research"
              className="flex h-12 items-center justify-center rounded-full border border-black/[.12] px-7 text-sm font-medium transition-colors hover:border-black/[.24] hover:bg-black/[.03]"
            >
              Read the research
            </a>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="border-t border-black/[.06] bg-zinc-50">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Research</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                We work on the parts of intelligence that don&apos;t have clean answers yet:
                reasoning, memory, and how systems stay reliable once they leave the benchmark.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Reasoning under uncertainty",
                  body: "Getting models to know what they don't know, and to act sensibly when the ground is shifting.",
                },
                {
                  title: "Long-horizon memory",
                  body: "Systems that carry context across days and tasks instead of forgetting the moment the window fills.",
                },
                {
                  title: "Evaluation that means something",
                  body: "Measuring the behavior you actually care about, not the proxy that happens to be easy to score.",
                },
                {
                  title: "Human-model interaction",
                  body: "The design questions that decide whether a capable model becomes a tool people trust.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-black/[.07] bg-white p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight">Products</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Research earns its keep when it ships. Everything we learn feeds directly into tools
            people put in front of real work.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/[.08] bg-black/[.08] sm:grid-cols-3">
            {[
              {
                title: "Platform",
                body: "The core models and APIs teams build on, tuned for reliability over demos.",
              },
              {
                title: "Applications",
                body: "End-to-end products for the workflows where good AI changes the day-to-day.",
              },
              {
                title: "Partnerships",
                body: "We take on a small number of hard problems with teams who own the domain.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-brand" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="border-y border-black/[.06] bg-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <h2 className="max-w-3xl text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
              Small team, long attention span. We&apos;d rather ship one thing that holds up than
              ten that impress for a week.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Research and product sit at the same table here. That&apos;s the whole idea behind the
              name: taking raw capability and giving it a shape someone can hold.
            </p>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Building something, or want to?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted">
            Tell us what you&apos;re working on. We read everything, and we answer the ones we can
            help with.
          </p>
          <a
            href="mailto:hello@shapeintelligence.ai"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-solid px-8 text-sm font-medium text-white transition-colors hover:bg-brand-solid-dark"
          >
            hello@shapeintelligence.ai
          </a>
        </section>
      </main>

      <footer className="border-t border-black/[.06]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <Image src="/shape-intelligence-logo-centered.svg" alt="Shape Intelligence" width={120} height={46} />
          <p>© {new Date().getFullYear()} Shape Intelligence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
