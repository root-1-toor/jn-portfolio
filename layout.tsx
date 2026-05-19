import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Newman — Engineering Lead",
  description: "Software engineer with a decade of tech grit. MERN at American Express. 350+ students instructed. Networks hardened.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}