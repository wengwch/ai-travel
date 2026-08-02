import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const title = "世界漫游志 · The Travel Library";
  const description = "按国家整理的复古城市旅行读本，收录当地人文、自然、美食与行程。";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "zh_CN",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
