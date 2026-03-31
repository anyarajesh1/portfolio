import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anya Rajesh | AI Engineer",
  description: "Portfolio of Anya Rajesh — Builder of Vigil AI and MedInsight AI",
  openGraph: {
    title: "Anya Rajesh | AI Engineer",
    description: "Portfolio showcasing Vigil AI and MedInsight AI projects",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
