"use client";

import { useEffect, useState } from "react";

const DIFY_TOKEN = "XuTDVnG0Ur8Hcvb0";
const DIFY_BASE_URL = "https://dify.ambassador-cloud.biz";
const DIFY_EMBED_SRC = `${DIFY_BASE_URL}/embed.min.js`;

export default function DifyEmbed() {
  const [open, setOpen] = useState(false);

  // Dify embed を1回だけ初期化
  useEffect(() => {
    // 既に読み込み済みなら何もしない
    if (document.getElementById("dify-embed-script")) return;

    // config をwindowに設定（Difyが参照）
    (window as any).difyChatbotConfig = {
      token: DIFY_TOKEN,
      baseUrl: DIFY_BASE_URL,
      inputs: {},
      systemVariables: {},
      userVariables: {},
    };

    // embed script を追加
    const s = document.createElement("script");
    s.id = "dify-embed-script";
    s.src = DIFY_EMBED_SRC;
    s.defer = true;

    // Dify仕様: scriptタグのidをtokenにしている例が多いので合わせる（安全）
    // ※ 既存のDify埋め込みコードと同様の形
    s.setAttribute("data-dify-token", DIFY_TOKEN);

    document.body.appendChild(s);

    // 生成されたDOMを監視して、デフォルトボタン非表示＆ウィンドウの見た目を整える
    const observer = new MutationObserver(() => {
      const bubbleBtn = document.getElementById("dify-chatbot-bubble-button");
      const bubbleWin = document.getElementById("dify-chatbot-bubble-window");

      // デフォルトの右下バブルボタンは消す（あなたのボタンを使う）
      if (bubbleBtn) {
        bubbleBtn.style.display = "none";
      }

      // 生成ウィンドウを「あなたのパネルっぽく」寄せる（位置/サイズ/角丸など）
      if (bubbleWin) {
        bubbleWin.style.right = "24px";
        bubbleWin.style.bottom = "88px"; // ボタンの上
        bubbleWin.style.width = "380px";
        bubbleWin.style.height = "600px";
        bubbleWin.style.borderRadius = "16px";
        bubbleWin.style.overflow = "hidden";
        bubbleWin.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)";
        bubbleWin.style.border = "1px solid rgba(0,0,0,0.12)";
        bubbleWin.style.zIndex = "10000";
      }

      // 両方揃ったら監視は軽く止める（無駄に監視し続けない）
      if (bubbleBtn && bubbleWin) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // open に応じて Dify のウィンドウを表示/非表示
  useEffect(() => {
    const bubbleWin = document.getElementById("dify-chatbot-bubble-window");
    if (!bubbleWin) return;

    bubbleWin.style.display = open ? "block" : "none";
  }, [open]);

  return (
    <>
      {/* 自前のチャットボタン（アイコン） */}
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
    </>
  );
}
