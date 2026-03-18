import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NoorPath — Your Daily Prayer Companion",
  description: "A calm, private, ad-free Islamic prayer companion. Track your five daily prayers, build consistency, and grow your practice. Free to download.",
  metadataBase: new URL("https://noorpath.app"),
  openGraph: {
    title: "NoorPath — Your Daily Prayer Companion",
    description: "A calm, private, ad-free Islamic prayer companion. Track your five daily prayers, build consistency, and grow your practice. Free to download.",
    url: "https://noorpath.app",
    siteName: "NoorPath",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoorPath — Your Daily Prayer Companion",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath — Your Daily Prayer Companion",
    description: "A calm, private, ad-free Islamic prayer companion. Track your five daily prayers, build consistency, and grow your practice. Free to download.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
