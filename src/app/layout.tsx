import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-semibold">Ledgerly</div>
            <nav className="text-sm text-gray-600 space-x-6">
              <a href="/" className="hover:text-gray-900">Overview</a>
              <a href="/support" className="hover:text-gray-900">Support</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t bg-white mt-20">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-gray-500">
            © 2025 Ledgerly Inc.
          </div>
        </footer>
      </body>
    </html>
  );
}
