import Link from "next/link";

// The signature. A quiet building at dusk whose windows warm up one by one —
// "the moment the lights come on." Ties the three products together (요옆's lit
// windows, 체체's clarity, 버저비터's spark) and the brand idea: the fog clears,
// something lights up. Motion is concentrated here and here only.
const COLS = 6;
const ROWS = 5;
const TOTAL = COLS * ROWS;
// scattered, deliberately un-uniform set of lit windows
const LIT = new Set([1, 4, 8, 13, 15, 20, 22, 27]);

function WindowGrid() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[340px] rounded-[28px] border border-line bg-mist p-5 shadow-[0_30px_80px_-40px_rgba(20,22,29,0.35)] sm:max-w-[380px]"
    >
      {/* roofline dot */}
      <div className="mx-auto mb-5 h-1.5 w-10 rounded-full bg-ink/10" />
      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const lit = LIT.has(i);
          // stagger the glow in reading order of the lit windows
          const order = [...LIT].indexOf(i);
          return (
            <div
              key={i}
              className={`window${lit ? " is-lit" : ""}`}
              style={lit ? { ["--d" as string]: `${300 + order * 240}ms` } : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft ambient wash behind the building */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,194,75,0.22), rgba(255,194,75,0) 70%)",
        }}
      />
      <div className="wrap grid items-center gap-14 pb-20 pt-16 sm:pt-24 md:grid-cols-[1.05fr_0.95fr] md:pb-28">
        <div>
          <p className="eyebrow rise">DOITEASY · 1인 개발 스튜디오</p>
          <h1
            className="rise mt-5 text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[3.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            복잡한 건 간단하게,
            <br />
            고민은 <span className="text-brand">가볍게</span>.
          </h1>
          <p
            className="rise mt-6 max-w-md text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            두잇이지는 일상의 고민을 하나 덜어주는 제품을 만듭니다. 흩어진 일을
            정리하는 도구일 수도, 마음을 남기는 공간일 수도, 손끝의 작은 게임일
            수도 있어요.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/#products"
              className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              무엇을 만드나요
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition-colors hover:bg-mist"
            >
              연락하기
            </Link>
          </div>
        </div>
        <div className="rise" style={{ animationDelay: "200ms" }}>
          <WindowGrid />
        </div>
      </div>
    </section>
  );
}
