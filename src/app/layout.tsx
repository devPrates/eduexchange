import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "@/context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduExChange",
  description: "Software de Troca e Substituição de aulas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchContextProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
