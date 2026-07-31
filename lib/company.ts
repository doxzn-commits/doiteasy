// Single source of truth for company + product facts.
// All values here are confirmed from the business registration and each
// product's own documentation. Do not invent values.

export const SITE_URL = "https://www.doiteasy.co.kr";

export const company = {
  name: "두잇이지",
  nameEn: "DOITEASY",
  // one-line positioning
  tagline: "복잡한 건 간단하게, 고민은 가볍게.",
  description:
    "두잇이지는 복잡한 것을 간단하게 만드는 1인 개발 스튜디오입니다. 일상의 고민을 하나 덜어주는 제품을 만듭니다.",
  established: "2026",
  // business registration
  ceo: "도유진",
  bizNumber: "837-26-02074",
  // 통신판매업 신고번호 (정부24 신고증 기준)
  mailOrderNumber: "2026-서울동대문-1011",
  address: "서울특별시 동대문구 천호대로 249, 803호(답십리동)",
  email: "contact.doiteasy@gmail.com",
} as const;

export type Product = {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  platform: string;
  status: string;
  href?: string;
  hrefLabel?: string;
  /* 우리 사이트 안의 제품 상세 페이지. 검색 유입을 받을 문서이므로
     홈에서 크롤 가능한 내부 링크가 반드시 하나는 있어야 한다. */
  detailHref?: string;
  accent: string; // decorative accent color for the product card
};

export const products: Product[] = [
  {
    id: "cheche",
    name: "체체",
    nameEn: "CheChé",
    tagline: "여기저기 흩어진 체험단을 한 곳에서.",
    description:
      "크리에이터가 여러 플랫폼에서 선정된 체험단의 마감·일정·수익을 한 화면에서 관리합니다. 캘린더로 마감을 놓치지 않고, 지도로 방문형 체험단을 찾고, 대시보드로 수익을 한눈에 봅니다.",
    platform: "웹 · iOS · Android",
    status: "웹에서 이용 가능",
    href: "https://cheche-app.vercel.app",
    hrefLabel: "웹에서 열기",
    accent: "#2E4BFF",
  },
  {
    id: "yoyeop",
    name: "요옆",
    nameEn: "yoyeop",
    tagline: "익명으로 남긴 마음에, 누군가 촛불을 켜고 갑니다.",
    description:
      "이름도 얼굴도 없이 호실 하나가 주어집니다. 오늘의 마음을 남기면 이웃이 조용히 촛불을 켭니다. 댓글도 좋아요도 없이, 누군가 다녀갔다는 것만 남습니다. 방 안에는 일기를 쓸수록 함께 자라는 펫이 있습니다.",
    platform: "iOS · Android",
    status: "스토어 출시 예정",
    accent: "#F4A63B",
  },
  {
    id: "buzzerbeater",
    name: "버저비터",
    nameEn: "Buzzerbeater",
    tagline: "정확한 순간에 버저를 눌러라. 0.001초로 갈리는 승부.",
    description:
      "목표 시간이 주어지고 초시계가 흐를 때, 정확한 순간에 버저를 누르는 타이밍 게임입니다. 허용 오차 안에 들면 다음 스테이지로, 정확히 맞추면 PERFECT. 하트를 모두 잃으면 끝나고, 총점으로 전체 이용자와 순위를 겨룹니다.",
    platform: "iOS",
    status: "App Store 출시",
    href: "https://apps.apple.com/kr/app/id6794667372",
    hrefLabel: "App Store 에서 열기",
    detailHref: "/buzzerbeater",
    accent: "#7A5CFF",
  },
];
