import { ImageResponse } from "next/og";

export const alt = "Kamiye";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Required for static export: prerender this route at build time.
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FDFBF7",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 180,
            color: "#2C2724",
            lineHeight: 1,
          }}
        >
          Kamiye
        </div>
        <div
          style={{
            width: 96,
            height: 6,
            backgroundColor: "#9A4D3E",
            marginTop: 32,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
