import { ImageResponse } from "next/og";

import { monogramDataUrl } from "@/components/brand/monogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0d",
      }}
    >
      <img
        alt=""
        width={116}
        height={116}
        src={monogramDataUrl({ foreground: "#f3f2ee", accent: "#9b86ff", strokeWidth: 6 })}
      />
    </div>,
    size,
  );
}
