import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightPath Tuition | Personalised Learning",
  description: "Online and at-home tuition for Primary and Middle School students.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}