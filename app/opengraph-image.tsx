import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "두잇이지 — 복잡한 건 간단하게, 고민은 가볍게.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#14161D";
const PAPER = "#FCFCFE";
const MUTED = "#5B6472";
const BRAND = "#4557F0";
const GLOW = "#FFC24B";
const LINE = "#E2E6EF";

export default async function Image() {
  const [bold, medium] = await Promise.all([
    readFile(join(process.cwd(), "app", "og-font-bold.ttf")),
    readFile(join(process.cwd(), "app", "og-font-medium.ttf")),
  ]);

  const litIndex = new Set([1, 4, 6]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: INK }}>
            doiteasy
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 500, color: MUTED }}>
            www.doiteasy.co.kr
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 34 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 30,
                  height: 40,
                  borderRadius: 5,
                  background: litIndex.has(i) ? GLOW : "#E7EAF2",
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 800,
              color: INK,
              letterSpacing: "-0.03em",
            }}
          >
            복잡한 건 간단하게,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 800,
              color: INK,
              letterSpacing: "-0.03em",
              marginTop: 6,
            }}
          >
            <span>고민은&nbsp;</span>
            <span style={{ color: BRAND }}>가볍게</span>
            <span>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 27, fontWeight: 500, color: MUTED }}>
            체체 · 요옆 · 버저비터
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 500, color: MUTED }}>
            1인 개발 스튜디오
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: bold, weight: 800, style: "normal" },
        { name: "Pretendard", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
