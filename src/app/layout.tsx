import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import DifyEmbed from "./components/DifyEmbed";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Dify Chatbot */}
        <DifyEmbed />
      </body>
    </html>
  );
}
