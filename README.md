# doiteasy.co.kr

두잇이지(DOITEASY) 공식 웹사이트. 복잡한 것을 간단하게 만드는 1인 개발 스튜디오의 소개 사이트입니다.

## 스택

- Next.js (App Router) + TypeScript + Tailwind CSS
- 정적 생성(SSG), 외부 분석·쿠키 없음
- Pretendard(자체 호스팅, 서브셋) · `next/font/local`
- SEO: metadata, Open Graph 이미지(`next/og`), `sitemap.xml`, `robots.txt`, `schema.org/Organization` JSON-LD

## 페이지

- `/` — 회사 소개 + 제품 3종(체체·요옆·버저비터) + 연락처
- `/privacy` — 개인정보처리방침
- `/terms` — 이용약관

## 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
```

## 배포

Vercel + 가비아 도메인(`www.doiteasy.co.kr`). `main` 브랜치 푸시 시 자동 배포됩니다.
