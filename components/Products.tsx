import { products, type Product } from "@/lib/company";

function Emblem({ id, accent }: { id: string; accent: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: accent,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (id === "cheche") {
    // stacked layers → "여러 곳을 한 곳에서"
    return (
      <svg {...common}>
        <path d="M14 3 25 9 14 15 3 9 14 3Z" />
        <path d="M3 14l11 6 11-6" />
        <path d="M3 19l11 6 11-6" />
      </svg>
    );
  }
  if (id === "yoyeop") {
    // a window with a small flame → 촛불
    return (
      <svg {...common}>
        <rect x="6" y="5" width="16" height="18" rx="2" />
        <path d="M14 5v18M6 14h16" />
        <circle cx="14" cy="14" r="1.6" fill={accent} stroke="none" />
      </svg>
    );
  }
  // buzzerbeater → a buzzer / precise moment
  return (
    <svg {...common}>
      <circle cx="14" cy="14" r="10" />
      <circle cx="14" cy="14" r="3.2" fill={accent} stroke="none" />
      <path d="M14 4v3M14 21v3M4 14h3M21 14h3" />
    </svg>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-card border border-line bg-paper p-7 transition-shadow hover:shadow-[0_24px_60px_-38px_rgba(20,22,29,0.45)] sm:p-9">
      {/* accent hairline top */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: p.accent }}
      />
      <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
        <div className="flex items-start gap-4 md:w-52 md:flex-col md:gap-5">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: `color-mix(in srgb, ${p.accent} 12%, transparent)` }}
          >
            <Emblem id={p.id} accent={p.accent} />
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">
                {p.name}
              </h3>
              <span className="text-sm font-medium text-muted">{p.nameEn}</span>
            </div>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: p.accent }}
              />
              {p.status}
            </span>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">
            {p.tagline}
          </p>
          <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-sm text-muted">{p.platform}</span>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:translate-x-0.5"
              >
                {p.hrefLabel ?? "바로가기"}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20">
      <div className="wrap section">
        <div className="max-w-2xl">
          <p className="eyebrow">지금 만들고 있는 것들</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
            세 개의 제품, 하나의 이유.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            각각 다른 고민을 덜어줍니다. 흩어진 일, 남기고 싶은 마음, 그리고 잠깐의
            몰입.
          </p>
        </div>
        <div className="mt-12 grid gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
