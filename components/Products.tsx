import Image from "next/image";
import Link from "next/link";
import {
  buildingProducts,
  liveProducts,
  type Product,
  type Shot,
} from "@/lib/company";

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
  if (id === "owlet") {
    // a roof over two eyes → 한 지붕 아래 두 사람 (올빼미이자 집)
    return (
      <svg {...common}>
        <path d="M3 12 14 4l11 8" />
        <path d="M5.5 12v10a1.5 1.5 0 0 0 1.5 1.5h14a1.5 1.5 0 0 0 1.5-1.5V12" />
        <circle cx="11" cy="17" r="1.7" fill={accent} stroke="none" />
        <circle cx="17" cy="17" r="1.7" fill={accent} stroke="none" />
      </svg>
    );
  }
  if (id === "yeobaek") {
    // a congestion curve with a marked trough → 붐비지 않는 시간
    return (
      <svg {...common}>
        <path d="M3 8c3.5 0 4.5 9 7.5 9s4-9 7.5-9 4.5 6 7 6" />
        <path d="M3 24h22" />
        <circle cx="10.5" cy="17" r="2.4" fill={accent} stroke="none" />
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

/* 실제 제품 화면. 좁은 화면에서는 세로로 쌓지 않고 가로로 넘겨 보게 한다 —
   네 장을 쌓으면 카드 하나가 화면 몇 개 길이가 되어 목록을 읽을 수 없다.
   폭이 한 줄을 다 담을 수 있는 lg 이상에서만 스크롤을 풀고 펼친다.
   음수 마진은 카드가 한 단으로 서는 md 미만에서만 — 이때만 카드 안쪽 여백을
   밀어내 스크롤 끝이 카드 가장자리에 닿는다. */
function Shots({ shots, name }: { shots: Shot[]; name: string }) {
  return (
    <div className="mt-7">
      <ul
        className="-mx-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-7 pb-2 sm:-mx-9 sm:px-9 md:mx-0 md:px-0 lg:flex-wrap lg:overflow-visible lg:pb-0"
        aria-label={`${name} 제품 화면`}
      >
        {shots.map((shot) => (
          <li key={shot.src} className="shrink-0 snap-start">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(max-width: 767px) 108px, 124px"
              className="w-[108px] rounded-xl border border-line bg-mist shadow-[0_18px_40px_-30px_rgba(20,22,29,0.55)] sm:w-[124px]"
            />
          </li>
        ))}
      </ul>
    </div>
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
          {p.icon ? (
            /* 출시된 제품은 스토어에 올라간 실제 아이콘을 쓴다. 추상 엠블럼보다
               「진짜 있는 앱」이라는 사실을 그대로 전한다. */
            <Image
              src={p.icon.src}
              alt={p.icon.alt}
              width={p.icon.width}
              height={p.icon.height}
              sizes="56px"
              className="h-14 w-14 shrink-0 rounded-2xl border border-line"
            />
          ) : (
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: `color-mix(in srgb, ${p.accent} 12%, transparent)` }}
            >
              <Emblem id={p.id} accent={p.accent} />
            </span>
          )}
          <div>
            <div className="flex items-baseline gap-2">
              <h4 className="text-xl font-bold tracking-[-0.02em] text-ink">
                {p.name}
              </h4>
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
            {p.detailHref && (
              <Link
                href={p.detailHref}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:translate-x-0.5"
              >
                자세히 보기
                <span aria-hidden="true">→</span>
              </Link>
            )}
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

          {p.shots && <Shots shots={p.shots} name={p.name} />}
        </div>
      </div>
    </article>
  );
}

/* 묶음 제목. 「지금 쓸 수 있는 것」과 「만들고 있는 것」을 갈라 두는 이유는
   과장을 막기 위해서다 — 개발 중인 제품이 출시된 제품과 같은 줄에 서면
   읽는 사람은 다섯 개 다 쓸 수 있다고 이해한다. */
function GroupHeading({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">{title}</h3>
      <span className="text-sm text-muted">{note}</span>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20">
      <div className="wrap section">
        <div className="max-w-2xl">
          <p className="eyebrow">지금 만들고 있는 것들</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
            다섯 개의 제품, 하나의 이유.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            각각 다른 고민을 덜어줍니다. 흩어진 일, 남기고 싶은 마음, 함께 사는 한 주,
            붐비지 않는 여행, 그리고 잠깐의 몰입.
          </p>
        </div>

        <div className="mt-12">
          <GroupHeading
            title="지금 쓸 수 있어요"
            note={`${liveProducts.length}개 · 스토어와 웹에 공개돼 있습니다`}
          />
          <div className="grid gap-5">
            {liveProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <GroupHeading
            title="만들고 있어요"
            note={`${buildingProducts.length}개 · 아직 정식 출시 전입니다`}
          />
          <div className="grid gap-5">
            {buildingProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
