import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 space-y-20">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            契約・請求管理を<br />一元化する
          </h1>
          <p className="text-gray-600 text-lg">
            Ledgerlyは、BtoB企業向けに契約・請求・更新情報を
            構造的に管理するクラウドサービスです。
          </p>
          <Link
            href="/support"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white text-sm"
          >
            サポートを見る
          </Link>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <ul className="space-y-4 text-sm">
            <li>・契約ステータス管理</li>
            <li>・請求履歴 / 支払状況の可視化</li>
            <li>・更新期限アラート</li>
            <li>・社内共有用の管理画面</li>
          </ul>
        </div>
      </div>

      {/* Feature Blocks */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "契約管理", desc: "契約条件・期間・更新可否を一元管理" },
          { title: "請求管理", desc: "請求金額・支払状況を可視化" },
          { title: "内部統制", desc: "属人化を防ぎ、管理部門の負担を軽減" },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl border bg-white p-6 space-y-2"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
