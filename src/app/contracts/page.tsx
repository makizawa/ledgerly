export default function Contracts() {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">契約管理</h1>
  
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3"><p className="text-slate-900">契約名</p></th>
              <th className="p-3"><p className="text-slate-900">取引先</p></th>
              <th className="p-3"><p className="text-slate-900">期間</p></th>
              <th className="p-3"><p className="text-slate-900">更新</p></th>
            </tr>
          </thead>
          <tbody>
            {[
              ["SaaS利用契約", "ABC株式会社", "2024/01 - 2025/12", "自動"],
              ["業務委託契約", "XYZ合同会社", "2023/06 - 2024/06", "手動"],
            ].map((row, i) => (
              <tr key={i} className="border-t">
                {row.map((cell) => (
                  <td key={cell} className="p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
  