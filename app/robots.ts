import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      /* AdMob app-ads.txt 크롤러. `*` 로도 이미 허용되지만, 구글 문서가
         이 user-agent 를 명시하라고 안내한다. 크롤러는 자기 이름의 블록을
         찾으면 `*` 블록을 무시하므로, 나중에 `*` 에 Disallow 가 추가돼도
         app-ads.txt 크롤링은 이 블록 덕에 막히지 않는다.
         이게 막히면 두잇이지 전체 앱의 AdMob 앱 인증이 실패한다. */
      { userAgent: "Google-adstxt", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
