import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lato, Rubik } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { I18nProvider } from "@/components/providers/i18n-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillBridge - Bridge the Gap Between Education and Career",
  description: "Connect with leading companies, work on real projects, and kickstart your professional journey with mentorship and hands-on experience.",
  keywords: ["SkillBridge", "Internships", "Projects", "Career", "Education", "Companies", "Mentorship"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lato.variable} ${rubik.variable} antialiased min-h-screen flex flex-col font-rubik`}
        suppressHydrationWarning={true}
      >
        <I18nProvider>
          <SmoothScrollProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
