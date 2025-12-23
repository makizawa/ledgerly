export default function Contracts() {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">契約管理</h1>
  
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">契約名</th>
              <th className="p-3">取引先</th>
              <th className="p-3">期間</th>
              <th className="p-3">更新</th>
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
  