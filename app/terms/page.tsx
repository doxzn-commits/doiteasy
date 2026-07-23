import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "이용약관",
  description: `${company.name} 웹사이트 이용약관입니다.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            ← 홈으로
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-ink">
            이용약관
          </h1>
          <p className="mt-3 text-sm text-muted">최종 업데이트: 2026년 7월 23일</p>

          <div className="prose-legal mt-10">
            <h2>제1조 (목적)</h2>
            <p>
              본 약관은 {company.name}(이하 &lsquo;회사&rsquo;)이 운영하는 소개
              웹사이트 <strong>www.doiteasy.co.kr</strong>(이하 &lsquo;본
              사이트&rsquo;)의 이용과 관련한 조건 및 절차를 규정하는 것을 목적으로
              합니다.
            </p>

            <h2>제2조 (사이트의 성격)</h2>
            <p>
              본 사이트는 회사와 회사가 만드는 제품을 소개하기 위한 정보 제공
              목적의 사이트입니다. 회원가입, 재화·용역의 거래, 결제 기능을 제공하지
              않습니다.
            </p>

            <h2>제3조 (지식재산권)</h2>
            <p>
              본 사이트에 게시된 텍스트, 이미지, 로고, 디자인 등 모든 콘텐츠에 대한
              저작권 및 기타 지식재산권은 회사에 귀속됩니다. 회사의 사전 동의 없이
              이를 복제·배포·전송·전시하는 행위를 금합니다.
            </p>

            <h2>제4조 (외부 링크)</h2>
            <p>
              본 사이트는 회사 제품 또는 제3자 서비스로 연결되는 링크를 포함할 수
              있습니다. 링크된 외부 사이트 및 그 콘텐츠는 해당 운영 주체의 책임
              하에 있으며, 회사는 이에 대해 보증하거나 책임지지 않습니다.
            </p>

            <h2>제5조 (책임의 한계)</h2>
            <p>
              회사는 본 사이트에 게재된 정보의 정확성과 최신성을 유지하기 위해
              노력하나, 그 완전성을 보증하지 않습니다. 이용자가 본 사이트의 정보를
              신뢰하여 취한 행위의 결과에 대해 회사는 관련 법령이 허용하는 범위에서
              책임을 지지 않습니다.
            </p>

            <h2>제6조 (제품 서비스의 약관)</h2>
            <p>
              회사가 제공하는 각 제품(체체, 요옆, 버저비터)의 이용에 관한 사항은
              해당 제품에서 별도로 제공하는 이용약관을 따릅니다.
            </p>

            <h2>제7조 (약관의 변경)</h2>
            <p>
              회사는 필요 시 본 약관을 변경할 수 있으며, 변경된 약관은 본 페이지에
              게시함으로써 효력이 발생합니다.
            </p>

            <h2>제8조 (준거법 및 관할)</h2>
            <p>
              본 약관은 대한민국 법령에 따라 해석되며, 본 사이트 이용과 관련하여
              분쟁이 발생하는 경우 관련 법령이 정하는 절차에 따릅니다.
            </p>

            <h2>사업자 정보</h2>
            <p>
              상호: {company.name} · 대표자: {company.ceo}
              <br />
              사업자등록번호: {company.bizNumber}
              <br />
              주소: {company.address}
              <br />
              이메일: <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
