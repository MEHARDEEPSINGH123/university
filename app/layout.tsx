import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Institute of Singapore | Executive Education & Professional Learning",
  description:
    "Registered with the Committee for Private Education (CPE UEN: 201829481E). Providing accredited executive education diplomas, professional certifications, and academic preparatory programmes in Singapore. SkillsFuture Singapore and NTUC UTAP eligible.",
  keywords: [
    "Singapore Executive Education",
    "Apex Institute of Singapore",
    "SkillsFuture Approved Courses",
    "Professional Certifications Singapore",
    "Data Analytics Executive Diploma",
    "Artificial Intelligence Singapore",
    "CPE Registered Private Education Institution",
    "GCE O-Level A-Level Preparation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="bg-white text-slate-800 font-body antialiased min-h-screen flex flex-col">
        <AppProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Modals />
        </AppProvider>
      </body>
    </html>
  );
}
