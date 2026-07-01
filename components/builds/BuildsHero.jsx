export default function BuildsHero() {
  return (
    <section className="pt-24 pb-14 md:pb-8">
      <div className="container">
        <div className="max-w-6xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 mb-6">
            <span className="block w-6 h-px bg-brand-500" />
            The Work
          </div>

          <h1
            className="font-display text-4xl md:text-6xl leading-[1.1] font-bold mb-7"
            style={{ color: "var(--cream-text)" }}
          >
            Built to solve. <br />{" "}
            <span className="text-brand-500">Not to impress.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-6xl"
            style={{ color: "var(--muted-warm)" }}
          >
            Real operational problems. Real systems. Real results.
          </p>
          <br />

          <p
            className="text-lg leading-relaxed max-w-6xl"
            style={{ color: "var(--muted-warm)" }}
          >
            Different industries. Different tools. Same goal. <br />
            Less manual work. Fewer bottlenecks. Systems that keep running
            without constant attention.
          </p>
          <br />
          {/* <p
            className="text-lg leading-relaxed max-w-6xl text-justify"
            style={{ color: "var(--muted-warm)" }}
          ></p> */}

          <p
            className="text-lg leading-relaxed max-w-6xl text-justify"
            style={{ color: "var(--muted-warm)" }}
          >
            If a process follows a pattern, there's usually a way to automate
            it.
          </p>
        </div>
      </div>
    </section>
  );
}
