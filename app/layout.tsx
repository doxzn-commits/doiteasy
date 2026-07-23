import type { Metadata } from "next";
import localFont from "next/font/local";
import { company, products, SITE_URL } from "@/lib/company";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "sans-serif",
  ],
});

const title = `${company.name} (${company.nameEn}) — ${company.tagline}`;
const description =
  "두잇이지는 복잡한 것을 간단하게 만드는 1인 개발 스튜디오입니다. 체험단 관리 서비스 체체, 익명 일기 앱 요옆, 타이밍 게임 버저비터를 만듭니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${company.name}`,
  },
  description,
  applicationName: company.nameEn,
  keywords: [
    "두잇이지",
    "DOITEASY",
    "체체",
    "요옆",
    "버저비터",
    "1인 개발",
    "앱 개발 스튜디오",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: company.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#fcfcfe",
  width: "device-width",
  initialScale: 1,
};

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.nameEn,
    url: SITE_URL,
    email: company.email,
    foundingDate: company.established,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressCountry: "KR",
    },
    founder: {
      "@type": "Person",
      name: company.ceo,
    },
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: p.name,
        alternateName: p.nameEn,
        description: p.tagline,
        operatingSystem: p.platform,
        applicationCategory: "MobileApplication",
        ...(p.href ? { url: p.href } : {}),
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          본문으로 건너뛰기
        </a>
        {children}
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
