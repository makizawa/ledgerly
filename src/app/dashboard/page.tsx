"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const billingData = [
  { month: "8月", amount: 9800000 },
  { month: "9月", amount: 11200000 },
  { month: "10月", amount: 10500000 },
  { month: "11月", amount: 11800000 },
  { month: "12月", amount: 12400000 },
];

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 space-y-12">
      <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>

      {/* KPI cards */}
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

      {/* Graph */}
      <div className="rounded-2xl border p-6">
        <div className="text-sm text-gray-500 mb-4">
          月別請求額の推移
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={billingData}>
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(v) => `¥${(v / 1_000_000).toFixed(1)}M`}
              />
              <Tooltip
                formatter={(v: number) =>
                  `¥${v.toLocaleString()}`
                }
              />
              <Line
                type="monotone"
                dataKey="amount"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
