"use client";

import { useEffect, useState } from "react";

const DIFY_TOKEN = "XuTDVnG0Ur8Hcvb0";
const DIFY_BASE_URL = "https://dify.ambassador-cloud.biz";
const DIFY_EMBED_SRC = `${DIFY_BASE_URL}/embed.min.js`;

export default function DifyEmbed() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // すでに読み込まれていれば何もしない
    if (document.getElementById(DIFY_TOKEN)) return;

    // ① Dify が参照する config を先に定義
    (window as any).difyChatbotConfig = {
      token: DIFY_TOKEN,
      baseUrl: DIFY_BASE_URL,
      inputs: {},
      systemVariables: {},
      userVariables: {},
    };

    // ② embed script を同期で読み込む（重要）
    const script = document.createElement("script");
    script.id = DIFY_TOKEN; // ★ Dify必須
    script.src = DIFY_EMBED_SRC;
    script.async = false;

    document.body.appendChild(script);

    // ③ DOM生成を待って調整
    const observer = new MutationObserver(() => {
      const bubbleBtn = document.getElementById("dify-chatbot-bubble-button");
      const bubbleWin = document.getElementById("dify-chatbot-bubble-window");

      // デフォルトのバブルボタンは非表示
      if (bubbleBtn) {
        bubbleBtn.style.display = "none";
      }

      // ウィンドウの見た目を調整
      if (bubbleWin) {
        bubbleWin.style.right = "24px";
        bubbleWin.style.bottom = "88px";
        bubbleWin.style.width = "380px";
        bubbleWin.style.height = "600px";
        bubbleWin.style.borderRadius = "16px";
        bubbleWin.style.overflow = "hidden";
        bubbleWin.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)";
        bubbleWin.style.border = "1px solid rgba(0,0,0,0.12)";
        bubbleWin.style.zIndex = "10000";
        bubbleWin.style.display = "none"; // 初期は閉じる
      }

      if (bubbleBtn && bubbleWin) observer.disconnect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // open state に応じて表示制御
  useEffect(() => {
    const bubbleWin = document.getElementById("dify-chatbot-bubble-window");
    if (!bubbleWin) return;
    bubbleWin.style.display = open ? "block" : "none";
  }, [open]);

  return (
    <button
      onClick={() => setOpen(v => !v)}
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
        border: "2px solid white",
        boxSizing: "border-box",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 吹き出しアイコン */}
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
  );
}
