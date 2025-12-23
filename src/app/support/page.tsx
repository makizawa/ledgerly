import Script from "next/script";

export default function Support() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 space-y-12">
      <div>
        <h1 className="text-3xl font-bold">サポート / FAQ</h1>
        <p className="text-gray-600 mt-2">
          契約・請求・権限に関するよくある質問を確認できます。
        </p>
      </div>

      {/* FAQダミー */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border bg-white p-6 space-y-2">
          <div className="font-medium">Q. 契約更新は自動ですか？</div>
          <div className="text-sm text-gray-600">
            契約条件に応じて自動更新／手動更新を設定できます。
          </div>
        </div>
        <div className="rounded-xl border bg-white p-6 space-y-2">
          <div className="font-medium">Q. 請求書はどこで確認できますか？</div>
          <div className="text-sm text-gray-600">
            管理画面の「請求管理」から確認可能です。
          </div>
        </div>
      </div>

      {/* Dify埋め込み予定 */}
      <Script id="dify-embed" strategy="afterInteractive">
        {`
          // Difyの埋め込みコードをここに貼る
        `}
      </Script>
    </section>
  );
}
