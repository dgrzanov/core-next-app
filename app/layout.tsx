import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Core NextJS App",
  description: "Core App containing all essential components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
