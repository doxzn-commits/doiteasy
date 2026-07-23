import { company } from "@/lib/company";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-mist">
      <div className="wrap section">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">연락처</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">
              제안, 협업, 문의 — 무엇이든.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              제품에 대한 이야기든 함께 만들고 싶은 것이든, 편하게 메일 주세요.
              읽고 직접 답장드립니다.
            </p>
          </div>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex h-14 items-center justify-center rounded-full bg-ink px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            {company.email}
          </a>
        </div>
      </div>
    </section>
  );
}
