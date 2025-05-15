import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The AI Times",
  description: "The world's leading AI newspaper",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}