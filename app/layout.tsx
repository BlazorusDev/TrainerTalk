import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Use a valid font from next/font/google
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrainerTalk - AI Trainer",
  description:
    "TrainerTalk is a real-time AI voice interview platform that helps users practice and improve their interview skills. It offers realistic mock interviews with instant feedback—perfect for leveling up your portfolio and confidence. Whether you're a job seeker or a hiring manager, TrainerTalk is your go-to tool for mastering interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
