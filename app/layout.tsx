import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anya Rajesh — Full-Stack AI Engineer",
  description: "Anya Rajesh builds applied AI systems across retrieval, real-time data, privacy, and product engineering.",
  openGraph: {
    title: "Anya Rajesh — Full-Stack AI Engineer",
    description: "Selected systems: Axiom, Vigil AI, and MedInsight AI.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
