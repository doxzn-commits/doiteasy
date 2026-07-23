import Link from "next/link";
import { company } from "@/lib/company";

// Business info is rendered as real text (never an image) — required for the
// organization account review.
export default function Footer() {
  const year = 2026;
  const bizRows: [string, string][] = [
    ["상호", company.name],
    ["대표자", company.ceo],
    ["사업자등록번호", company.bizNumber],
    // 통신판매업 신고번호: 값이 있을 때만 노출
    ...(company.mailOrderNumber
      ? ([["통신판매업 신고번호", company.mailOrderNumber]] as [string, string][])
      : []),
    ["주소", company.address],
    ["이메일", company.email],
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="wrap py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="wordmark text-2xl">doiteasy</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              복잡한 것을 간단하게. 일상의 고민을 하나 덜어주는 제품을 만듭니다.
            </p>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="flex gap-6 text-sm font-medium text-paper/70">
              <li>
                <Link href="/#products" className="hover:text-paper">
                  제품
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-paper">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-paper">
                  이용약관
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="my-10 border-paper/12" />

        <div className="grid gap-x-10 gap-y-2 text-sm text-paper/60 sm:grid-cols-2">
          {bizRows.map(([label, value]) => (
            <p key={label} className="flex gap-2">
              <span className="shrink-0 text-paper/40">{label}</span>
              <span className="text-paper/75">{value}</span>
            </p>
          ))}
        </div>

        <p className="mt-10 text-xs text-paper/40">
          © {year} {company.name} ({company.nameEn}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
