export default function Dashboard() {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>
  
        <div className="grid grid-cols-3 gap-6">
          {[
            ["有効契約数", "128件"],
            ["今月の請求額", "¥12,400,000"],
            ["更新予定（30日以内）", "6件"],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl border p-6">
              <div className="text-sm text-gray-500">{title}</div>
              <div className="text-2xl font-bold mt-2">{value}</div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  