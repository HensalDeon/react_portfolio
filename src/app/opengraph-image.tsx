import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0b0b0d",
        color: "#f3f2ee",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#9b9a95",
          fontFamily: "monospace",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: 999, background: "#9b86ff" }} />
        {site.role} at {site.company}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "#9b9a95", fontFamily: "sans-serif", maxWidth: 960 }}>
          {site.tagline}
        </div>
      </div>
    </div>,
    size,
  );
}
