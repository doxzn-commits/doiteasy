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

/* 제품을 두 묶음으로 나눈다. 다섯 개를 한 줄로 늘어놓으면 「출시된 것」과
   「아직 없는 것」이 같은 무게로 읽히고, 그건 과장이다.
   - live     : 지금 이 순간 누구나 쓸 수 있다 (스토어·웹 공개)
   - building : 만드는 중이다. 아직 스토어에 없거나 데모만 있다 */
export type ProductGroup = "live" | "building";

export type Product = {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  platform: string;
  status: string;
  group: ProductGroup;
  href?: string;
  hrefLabel?: string;
  /* 우리 사이트 안의 제품 상세 페이지. 검색 유입을 받을 문서이므로
     홈에서 크롤 가능한 내부 링크가 반드시 하나는 있어야 한다. */
  detailHref?: string;
  accent: string; // decorative accent color for the product card
  /* 스토어에 제출한 실제 앱 아이콘. 있으면 카드가 추상 엠블럼 대신 이걸 쓴다.
     출시된 제품에만 있다 — 아직 없는 제품에 가짜 아이콘을 만들어 붙이지 않는다. */
  icon?: Shot;
  /* 실제 제품 화면. 목업이 아니라 각 제품이 스토어·자사 랜딩에 이미
     게시한 공식 이미지만 쓴다. 출처는 각 항목 주석에 남긴다. */
  shots?: Shot[];
};

export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const products: Product[] = [
  {
    id: "buzzerbeater",
    name: "버저비터",
    nameEn: "Buzzerbeater",
    tagline: "정확한 순간에 버저를 눌러라. 0.001초로 갈리는 승부.",
    description:
      "목표 시간이 주어지고 초시계가 흐를 때, 정확한 순간에 버저를 누르는 타이밍 게임입니다. 허용 오차 안에 들면 다음 스테이지로, 정확히 맞추면 PERFECT. 하트를 모두 잃으면 끝나고, 총점으로 전체 이용자와 순위를 겨룹니다.",
    platform: "iOS · 앱인토스",
    status: "App Store 출시",
    group: "live",
    href: "https://apps.apple.com/kr/app/id6794667372",
    hrefLabel: "App Store 에서 열기",
    detailHref: "/buzzerbeater",
    accent: "#7A5CFF",
    /* 출처: buzzerbeater/assets/out — App Store·앱인토스에 제출한 것과 같은 파일 */
    icon: {
      src: "/buzzerbeater/icon.png",
      alt: "버저비터 앱 아이콘",
      width: 256,
      height: 256,
    },
    shots: [
      {
        src: "/buzzerbeater/game.png",
        alt: "버저비터 게임 화면 — 목표 시간과 흐르는 초시계, 중앙의 버저 버튼",
        width: 636,
        height: 1048,
      },
      {
        src: "/buzzerbeater/perfect.png",
        alt: "버저비터 PERFECT 판정 화면 — 오차 없이 맞췄을 때의 보너스 연출",
        width: 636,
        height: 1048,
      },
      {
        src: "/buzzerbeater/rank.png",
        alt: "버저비터 시즌 랭킹 화면 — 전체 이용자와 총점으로 겨루는 순위표",
        width: 636,
        height: 1048,
      },
      {
        src: "/buzzerbeater/skins.png",
        alt: "버저비터 버저 보관함 — 점수로 해금하는 버저 디자인 목록",
        width: 636,
        height: 1048,
      },
    ],
  },
  {
    id: "cheche",
    name: "체체",
    nameEn: "CheChé",
    tagline: "여기저기 흩어진 체험단을 한 곳에서.",
    description:
      "크리에이터가 여러 플랫폼에서 선정된 체험단의 마감·일정·수익을 한 화면에서 관리합니다. 캘린더로 마감을 놓치지 않고, 지도로 방문형 체험단을 찾고, 대시보드로 수익을 한눈에 봅니다.",
    platform: "웹 · 모바일 앱 준비 중",
    status: "웹에서 이용 가능",
    group: "live",
    href: "https://www.cheche.co.kr",
    hrefLabel: "웹에서 열기",
    accent: "#2E4BFF",
    /* 출처: cheche.co.kr 공식 랜딩(/landing/*.png)에 이미 게시된 제품 화면 */
    icon: {
      src: "/cheche/icon.png",
      alt: "체체 앱 아이콘",
      width: 256,
      height: 256,
    },
    shots: [
      {
        src: "/cheche/calendar.png",
        alt: "체체 캘린더 화면 — 선정된 체험단의 리뷰 마감일이 월간 달력에 표시된 모습",
        width: 431,
        height: 949,
      },
      {
        src: "/cheche/url.png",
        alt: "체체 일정 등록 화면 — 체험단 공고 URL 을 붙여넣으면 정보가 자동으로 채워지는 시트",
        width: 437,
        height: 945,
      },
      {
        src: "/cheche/detail.png",
        alt: "체체 일정 상세 화면 — 리뷰 마감일, 체험일자, 협찬 품목과 가이드라인",
        width: 439,
        height: 942,
      },
      {
        src: "/cheche/revenue.png",
        alt: "체체 수익 대시보드 — 월 수익 현황과 캠페인별 협찬가 내역",
        width: 432,
        height: 947,
      },
    ],
  },
  {
    id: "yoyeop",
    name: "요옆",
    nameEn: "yoyeop",
    tagline: "익명으로 남긴 마음에, 누군가 촛불을 켜고 갑니다.",
    description:
      "이름도 얼굴도 없이 호실 하나가 주어집니다. 오늘의 마음을 남기면 이웃이 조용히 촛불을 켭니다. 댓글도 좋아요도 없이, 누군가 다녀갔다는 것만 남습니다. 방 안에는 일기를 쓸수록 함께 자라는 펫이 있습니다.",
    platform: "iOS · Android",
    status: "App Store 출시 준비 중",
    group: "building",
    accent: "#F4A63B",
  },
  {
    id: "owlet",
    name: "아월렛",
    nameEn: "owlet",
    tagline: "둘이 사는 한 주를, 둘이 함께 굴립니다.",
    description:
      "동거하는 두 사람이 돈·식단·장보기·집안일을 한 주 단위로 함께 운영하는 앱입니다. 가계부를 열었더니 식단과 청소가 따라 나오는 게 아니라, 애초에 함께 사는 한 주가 한 화면에 있습니다. 정산은 강요하지 않고, 누가 더 했는지 점수 매기지 않습니다.",
    platform: "iOS · Android",
    status: "개발 중",
    group: "building",
    accent: "#1F4D45",
  },
  {
    id: "yeobaek",
    name: "여백",
    nameEn: "yeobaek",
    tagline: "붐비지 않는 시간에, 가고 싶던 그곳으로.",
    description:
      "한국관광공사 공공 데이터의 혼잡 예측으로 방문 시간·순서·장소를 다시 짜는 여행 설계 서비스입니다. 빈 곳을 권하는 대신 원하던 경험을 인파 없이 하도록 돕습니다. 2026 관광데이터 활용 공모전 웹·앱 구현 부문 출품작입니다.",
    platform: "웹",
    status: "공모전 출품 · 프로토타입 공개",
    group: "building",
    href: "https://yeoback-gold.vercel.app",
    hrefLabel: "프로토타입 열기",
    accent: "#0047A0",
  },
];

export const liveProducts = products.filter((p) => p.group === "live");
export const buildingProducts = products.filter((p) => p.group === "building");
