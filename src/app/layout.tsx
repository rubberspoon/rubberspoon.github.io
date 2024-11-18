import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const NunitoSans = localFont({
  src: "./fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito-sans",
  weight: "100 900",
});
const NunitoSansItalic = localFont({
  src: "./fonts/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito-sans-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RubberSpoon",
  description: "Bending spoons, one at a time...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NunitoSans.variable} ${NunitoSansItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
