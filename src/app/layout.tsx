import { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
})




interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={jetbrains_mono.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

