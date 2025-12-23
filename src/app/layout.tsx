import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
