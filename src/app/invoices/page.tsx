export default function Invoices() {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">請求管理</h1>
  
        <ul className="space-y-4">
          {[
            ["2025年1月分", "¥1,200,000", "発行済"],
            ["2025年2月分", "¥1,200,000", "下書き"],
          ].map(([month, amount, status]) => (
            <li
              key={month}
              className="rounded-xl border p-5 flex justify-between"
            >
              <div>
                <div className="font-medium">{month}</div>
                <div className="text-sm text-gray-500">{amount}</div>
              </div>
              <div className="text-sm">{status}</div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  