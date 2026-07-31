import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, products, SITE_URL } from "@/lib/company";

/* 버저비터 전용 랜딩.
   목적은 두 가지다. ① 「버저비터」를 검색한 사람이 도달할 문서를 우리 도메인에
   하나 만든다(App Store 제품 페이지는 우리가 제어할 수 없다). ② 앱 스토어로
   보내는 경로를 만든다. 사실은 전부 lib/company.ts 와 게임 기획서에서 온 것만
   쓴다 — 평점·다운로드 수처럼 아직 없는 수치는 지어내지 않는다. */

const app = products.find((p) => p.id === "buzzerbeater")!;
const APP_STORE_URL = app.href!;

const title = "버저비터 — 0.001초로 갈리는 타이밍 게임";
const description =
  "버저비터는 목표 시간에 정확히 버저를 누르는 iOS 타이밍 게임입니다. 오차가 0.001초 단위로 표시되고, 스테이지가 오를수록 허용 오차가 좁아집니다. 회원가입 없이 무료로 즐기세요.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "버저비터",
    "버저비터 앱",
    "버저비터 게임",
    "타이밍 게임",
    "반응속도 게임",
    "순발력 게임",
    "초시계 게임",
    "무료 아케이드 게임",
    "iOS 게임",
  ],
  alternates: { canonical: "/buzzerbeater" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/buzzerbeater`,
    siteName: company.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

/* 구조화 데이터. 평점·리뷰 수는 실제로 0이므로 aggregateRating 을 넣지 않는다 —
   없는 값을 넣으면 구글 리치 결과 정책 위반이고, 신뢰도 문제로도 남는다. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "버저비터",
  alternateName: "Buzzerbeater",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Action",
  operatingSystem: "iOS 15.1 이상",
  url: `${SITE_URL}/buzzerbeater`,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  description,
  inLanguage: "ko",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  author: {
    "@type": "Organization",
    name: company.name,
    alternateName: company.nameEn,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: company.name,
    url: SITE_URL,
  },
};

const shots = [
  { src: "/buzzerbeater/game.png", alt: "버저비터 게임 화면 — 목표 시간과 흐르는 초시계, 중앙의 버저 버튼" },
  { src: "/buzzerbeater/perfect.png", alt: "버저비터 PERFECT 판정 화면 — 오차 없이 맞췄을 때의 보너스 연출" },
  { src: "/buzzerbeater/rank.png", alt: "버저비터 시즌 랭킹 화면 — 전체 이용자와 총점으로 겨루는 순위표" },
  { src: "/buzzerbeater/skins.png", alt: "버저비터 버저 보관함 — 점수로 해금하는 버저 디자인 목록" },
];

const specials = [
  { name: "BLIND", desc: "초시계가 중간에 사라집니다. 눈이 아니라 몸이 기억한 박자로 눌러야 합니다." },
  { name: "RUSH", desc: "초시계가 1.5배 빠르게 흐릅니다. 익숙해진 감각이 한 번에 무너집니다." },
  { name: "REVERSE", desc: "목표 시간에서 0까지 거꾸로 내려갑니다." },
  { name: "DOUBLE", desc: "한 스테이지에서 두 번 연속 맞춰야 넘어갑니다." },
];

const faqs = [
  {
    q: "버저비터는 어떤 게임인가요?",
    a: "목표 시간이 주어지고, 버저를 누르면 초시계가 0부터 흐릅니다. 목표가 4.20초라면 초시계가 정확히 4.20초가 되는 순간 다시 버저를 누르는 타이밍 게임입니다. 누른 순간의 오차가 0.001초 단위로 표시됩니다.",
  },
  {
    q: "무료인가요?",
    a: "네, 무료입니다. 인앱 결제가 없습니다. 버저 디자인은 돈으로 살 수 없고 점수로만 해금됩니다.",
  },
  {
    q: "회원가입이 필요한가요?",
    a: "필요 없습니다. 설치하면 바로 시작할 수 있고, 랭킹용 익명 식별자가 자동으로 발급됩니다.",
  },
  {
    q: "안드로이드에서도 할 수 있나요?",
    a: "현재는 iOS(App Store)에서만 이용할 수 있습니다. 다른 플랫폼은 준비 중입니다.",
  },
  {
    q: "하트는 무엇인가요?",
    a: "타이밍을 놓치면 하트가 하나 줄어들고, 다섯 개를 모두 잃으면 게임이 끝납니다. 하트는 6분마다 하나씩 저절로 회복되고, 광고를 보고 채울 수도 있습니다.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5 ${className}`}
    >
      App Store 에서 받기
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function BuzzerbeaterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main id="main">
        {/* ── 히어로 ───────────────────────────── */}
        <section className="wrap pt-16 md:pt-24">
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            ← 홈으로
          </Link>

          <div className="mt-8 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="eyebrow">타이밍 게임 · iOS</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.035em] text-ink sm:text-5xl">
                버저비터
              </h1>
              <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-2xl">
                정확한 순간에 버저를 눌러라.
                <br />
                0.001초로 갈리는 승부.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                목표 시간이 주어지고 초시계가 흐릅니다. 정확히 그 순간에 버저를
                누르세요. 오차가 0.001초 단위로 표시되고, 오차 없이 맞추면
                PERFECT 보너스를 받습니다.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <AppStoreButton />
                <span className="text-sm text-muted">
                  무료 · 인앱 결제 없음 · 회원가입 없음
                </span>
              </div>
            </div>

            <div className="justify-self-center">
              <Image
                src="/buzzerbeater/game.png"
                alt={shots[0].alt}
                width={636}
                height={1048}
                priority
                className="w-[240px] rounded-[28px] border border-line shadow-[0_40px_80px_-48px_rgba(20,22,29,0.5)] sm:w-[280px]"
              />
            </div>
          </div>
        </section>

        {/* ── 규칙 ─────────────────────────────── */}
        <section className="wrap section">
          <div className="max-w-2xl">
            <p className="eyebrow">규칙은 한 줄</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
              배우는 데 10초, 익히는 데는 오래.
            </h2>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["목표 시간을 본다", "예를 들어 4.20초."],
              ["버저를 눌러 시작", "초시계가 0부터 흐릅니다."],
              ["그 순간에 다시 누른다", "오차가 0.001초 단위로 표시됩니다."],
            ].map(([t, d], i) => (
              <li
                key={t}
                className="rounded-card border border-line bg-paper p-7"
              >
                <span className="text-sm font-bold text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold tracking-[-0.01em] text-ink">
                  {t}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-2xl leading-relaxed text-muted">
            스테이지 1의 허용 오차는 ±0.30초로 넉넉합니다. 하지만 단계가 오를수록
            계속 좁아지고, EXTREME 구간에 들어서면 눈이 아니라 몸이 기억한 감각으로
            눌러야 합니다.
          </p>
        </section>

        {/* ── 특수 스테이지 ────────────────────── */}
        <section className="bg-mist">
          <div className="wrap section">
            <div className="max-w-2xl">
              <p className="eyebrow">방심하면 무너지는 구간</p>
              <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
                특수 스테이지 4종.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                일정 스테이지마다 규칙이 한 번씩 바뀝니다. 점수는 1.5배입니다.
              </p>
            </div>

            <dl className="mt-10 grid gap-5 sm:grid-cols-2">
              {specials.map((s) => (
                <div
                  key={s.name}
                  className="rounded-card border border-line bg-paper p-7"
                >
                  <dt className="text-lg font-extrabold tracking-[-0.01em] text-ink">
                    {s.name}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">{s.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 화면 ─────────────────────────────── */}
        <section className="wrap section">
          <div className="max-w-2xl">
            <p className="eyebrow">게임 화면</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
              랭킹, 그리고 실력으로만 얻는 버저.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              시즌 랭킹에서 전체 이용자와 총점으로 겨룹니다. 기록이 쌓이면 실버
              크롬, 골드 글로우, 홀로그램 같은 버저 디자인이 열립니다.{" "}
              <strong className="font-semibold text-ink">
                돈으로 살 수 있는 것은 하나도 없습니다.
              </strong>
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
            {shots.map((s) => (
              <li key={s.src}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={636}
                  height={1048}
                  className="w-full rounded-[20px] border border-line"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ──────────────────────────────── */}
        <section className="bg-mist">
          <div className="wrap section">
            <div className="max-w-2xl">
              <p className="eyebrow">자주 묻는 질문</p>
              <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
                버저비터에 대해.
              </h2>
            </div>

            <dl className="mt-10 grid max-w-3xl gap-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-line pb-6">
                  <dt className="text-lg font-bold tracking-[-0.01em] text-ink">
                    {f.q}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted">{f.a}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <AppStoreButton />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
