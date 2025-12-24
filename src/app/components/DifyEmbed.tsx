"use client";

import { useState } from "react";

export default function DifyEmbed() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* チャットボタン（アイコン） */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="サポートチャット"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#111827",
          color: "white",
          border: "2px solid white",      // ← 追加
          boxSizing: "border-box",        // ← 追加
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 吹き出しアイコン（SVG） */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      </button>

      {/* チャットパネル */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: 24,
            bottom: 88,
            width: 380,
            height: 600,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.12)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
            background: "white",
            zIndex: 10000,
          }}
        >
          <iframe
            src="https://dify.ambassador-cloud.biz/chatbot/XuTDVnG0Ur8Hcvb0"
            style={{ width: "100%", height: "100%" }}
            frameBorder={0}
            allow="microphone"
          />
        </div>
      )}
    </>
  );
}
