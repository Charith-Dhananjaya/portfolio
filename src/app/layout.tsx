import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charith Dhananjaya De Mel | Full Stack Engineer",
  description:
    "Full Stack Software Engineer specializing in scalable backend systems, modern frontends, microservices architecture, and AI-integrated solutions. Available for opportunities.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Spring Boot",
    "Microservices",
    "AI",
    "TypeScript",
  ],
  authors: [{ name: "Charith Dhananjaya De Mel" }],
  openGraph: {
    title: "Charith Dhananjaya De Mel | Full Stack Engineer",
    description:
      "I design scalable backend systems and modern frontend applications that power real-world businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charith Dhananjaya De Mel | Full Stack Engineer",
    description:
      "Full Stack Engineer | Microservices Architect | AI Enthusiast",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* Background grid pattern */}
          <div className="bg-grid" aria-hidden="true" />

          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
