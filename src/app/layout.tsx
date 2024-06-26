import Navbar from "@/components/Navbar/navbar";
import { description } from "@/utils/copy";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";

const inter = LocalFont({
  src: "../../public/Monospace-medium.ttf",
  variable: "--font-inter",
});

const interMedium = LocalFont({
  src: "../../public/Monospace-bold.ttf",
  variable: "--font-inter-medium",
});

export const metadata: Metadata = {
  title: "Gon's Portfolio",
  description: description,
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interMedium.variable} font-serif ml-20 mr-20 flex flex-col h-[100vh] bg-[url(https://grainy-gradients.vercel.app/noise.svg)] bg-backgroundColor max-sm:m-0`}>
        <Navbar />
        <main className="flex-grow flex flex-col justify-center mx-20 max-sm:m-0">
          {children}
        </main>
        <div>{modal}</div>
      </body>
    </html>
  );
}
