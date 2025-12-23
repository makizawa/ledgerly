import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg">Ledgerly</div>

        <nav className="flex gap-6 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900">Dashboard</Link>
          <Link href="/contracts" className="hover:text-slate-900">Contracts</Link>
          <Link href="/invoices" className="hover:text-slate-900">Invoices</Link>
          <Link href="/support" className="hover:text-slate-900">Support</Link>
        </nav>
      </div>
    </header>
  );
}
