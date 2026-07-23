import Link from "next/link";
import { company } from "@/lib/company";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="wordmark text-lg tracking-tight text-ink"
          aria-label={`${company.name} 홈`}
        >
          doiteasy
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            <li>
              <Link
                href="/#about"
                className="transition-colors hover:text-ink"
              >
                소개
              </Link>
            </li>
            <li>
              <Link
                href="/#products"
                className="transition-colors hover:text-ink"
              >
                제품
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="transition-colors hover:text-ink"
              >
                연락처
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
