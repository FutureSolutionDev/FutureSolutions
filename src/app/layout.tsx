import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetaConfig } from "@/constants/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = MetaConfig as Metadata;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${inter.className}`}
        suppressHydrationWarning={true}
      >
        {MetaConfig.keywords.map((keyword, index) => (
          <h1
            style={{
              position: "fixed",
              top: "-1000%",
            }}
            key={`keyword-${index}`}
          >
            {keyword}
          </h1>
        ))}
        {children}
      </body>
    </html>
  );
}
