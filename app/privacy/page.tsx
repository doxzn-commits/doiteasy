import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${company.name} 웹사이트의 개인정보처리방침입니다.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
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
            개인정보처리방침
          </h1>
          <p className="mt-3 text-sm text-muted">최종 업데이트: 2026년 7월 23일</p>

          <div className="prose-legal mt-10">
            <p>
              {company.name}(이하 &lsquo;회사&rsquo;)는 이용자의 개인정보를
              소중히 여기며 관련 법령을 준수합니다. 본 방침은 회사의 소개
              웹사이트(<strong>www.doiteasy.co.kr</strong>, 이하 &lsquo;본
              사이트&rsquo;)에 적용됩니다.
            </p>

            <h2>1. 본 사이트가 수집하는 개인정보</h2>
            <p>
              본 사이트는 <strong>어떠한 개인정보도 수집하지 않습니다.</strong>{" "}
              회원가입, 로그인, 문의 폼이 없으며 아래 항목을 일절 사용하지
              않습니다.
            </p>
            <ul>
              <li>분석·통계 스크립트 (예: Google Analytics)</li>
              <li>광고 추적기 및 마케팅 픽셀</li>
              <li>비필수 쿠키 및 로컬 저장소 기반 식별</li>
              <li>이름·연락처 등을 입력받는 양식</li>
            </ul>

            <h2>2. 문의 시 처리</h2>
            <p>
              이용자가 이메일(
              <a href={`mailto:${company.email}`}>{company.email}</a>)로 문의하는
              경우, 회사는 문의에 답변할 목적으로만 해당 메일에 포함된 정보를
              이용하며, 답변 완료 후 별도 보관하거나 다른 목적으로 이용하지
              않습니다.
            </p>

            <h2>3. 제품(앱) 서비스의 개인정보 처리</h2>
            <p>
              회사가 제공하는 각 제품(체체, 요옆, 버저비터)은 본 사이트와 별개의
              서비스입니다. 각 제품의 개인정보 처리에 관한 사항은 해당 제품의
              스토어 등록 정보 및 앱 내에서 제공되는 개별 개인정보처리방침을
              따릅니다. 관련 문의는 대표 이메일로 접수해 주시면 안내드립니다.
            </p>

            <h2>4. 이용자의 권리</h2>
            <p>
              이용자는 언제든지 대표 이메일을 통해 본인의 개인정보 처리에 관한
              열람·정정·삭제를 요청할 수 있으며, 회사는 관련 법령에 따라 지체 없이
              조치합니다. 다만 본 사이트는 개인정보를 수집·보관하지 않으므로 통상의
              경우 보관된 정보가 존재하지 않습니다.
            </p>

            <h2>5. 방침 변경</h2>
            <p>
              본 방침이 변경되는 경우 변경 내용과 시행일을 본 페이지에 게시합니다.
            </p>

            <h2>6. 개인정보 보호 문의</h2>
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
