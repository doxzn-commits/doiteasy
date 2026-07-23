export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-mist">
      <div className="wrap section">
        <p className="eyebrow">우리는 이런 회사</p>
        <div className="mt-6 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 className="text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
            형태는 달라도,
            <br />
            목적은 하나입니다.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              두잇이지는 복잡한 것을 간단하게 만드는{" "}
              <strong className="font-semibold text-ink">1인 개발 스튜디오</strong>
              입니다. 크게 벌이기보다, 하나를 정확하게 만드는 쪽을 택합니다.
            </p>
            <p>
              흩어진 일을 정리하는 도구부터 마음을 기록하는 조용한 공간, 손끝의
              타이밍 게임까지 — 만드는 제품의 결은 제각각이지만 이유는 같습니다.{" "}
              <strong className="font-semibold text-ink">
                쓰는 사람의 고민을 하나 덜어주는 것.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
