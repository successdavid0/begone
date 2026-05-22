import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "BEGONE — Web3 Content Creator & Meme Architect",
  description:
    "BEGONE (@ademolabegone) — Web3 Content Creator & Meme Architect. Building culture, driving communities, making noise in crypto.",
  openGraph: {
    title: "BEGONE — Web3 Content Creator & Meme Architect",
    description:
      "Building culture. Driving communities. Making noise in crypto since day one.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
