"use client";

import Script from "next/script";

export default function DifyEmbed() {
  return (
    <Script
      src="https://xxxxx.dify.app/embed.js"
      strategy="afterInteractive"
    />
  );
}
