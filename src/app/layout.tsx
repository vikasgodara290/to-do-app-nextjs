import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To Do App",
  description: "Created using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-serif"
      >
        {children}
      </body>
    </html>
  );
}
