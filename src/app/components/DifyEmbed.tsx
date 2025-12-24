"use client";

import Script from "next/script";

export default function DifyEmbed() {
  return (
    <>
      {/* ① Dify config（scriptとして先に定義） */}
      <Script id="dify-config" strategy="beforeInteractive">
        {`
          window.difyChatbotConfig = {
            token: "XuTDVnG0Ur8Hcvb0",
            baseUrl: "https://dify.ambassador-cloud.biz",
            inputs: {},
            systemVariables: {},
            userVariables: {},
          };
        `}
      </Script>

      {/* ② Dify embed script */}
      <Script
        src="https://dify.ambassador-cloud.biz/embed.min.js"
        id="XuTDVnG0Ur8Hcvb0"
        strategy="afterInteractive"
      />

      {/* ③ Style override */}
      <style jsx global>{`
        #dify-chatbot-bubble-button {
          background-color: #1c64f2 !important;
        }
        #dify-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
        }
      `}</style>
    </>
  );
}
