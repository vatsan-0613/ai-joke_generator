import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/toaster"




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KadiJoke",
  description: "Ai-Joke Generator",
  icons : {
    icon : '/clown.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
      </html>
    </SessionWrapper>
  );
}
