import type { Metadata } from "next";
import "./globals.css";

// Use a reliable system font stack instead of downloading Google Fonts.
const SYSTEM_SANS =
  "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
const SYSTEM_MONO =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace";

export const metadata: Metadata = {
  title: "myOwn | Designr🎨🖌️",
  description: "created with 💖 by Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{
          // set the custom properties that the rest of the app expects
          ...({
            "--font-geist-sans": SYSTEM_SANS,
            "--font-geist-mono": SYSTEM_MONO,
          } as React.CSSProperties & Record<string, string>),
        }}
      >
        {children}
      </body>
    </html>
  );
}
