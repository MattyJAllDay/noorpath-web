import "./globals.css";

export const metadata = {
  title: "NoorPath - Prayer Companion",
  description: "NoorPath is a calm, private Islamic prayer tracker and daily companion. Track your five daily prayers, build consistency, and grow your practice. Free to download.",
  metadataBase: new URL("https://noorpath.app"),
  alternates: {
    canonical: "https://noorpath.app",
  },
  openGraph: {
    title: "NoorPath - Prayer Companion",
    description: "NoorPath is a calm, private Islamic prayer tracker and daily companion. Track your five daily prayers, build consistency, and grow your practice. Free to download.",
    url: "https://noorpath.app",
    siteName: "NoorPath",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath - Prayer Companion",
    description: "NoorPath is a calm, private Islamic prayer tracker and daily companion. Track your five daily prayers, build consistency, and grow your practice. Free to download.",
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
      <head>
        <meta name="google-site-verification" content="zpQ-Z0kqrGmvtn1GPkJ2OZ1T8tQ5T1KE9CN3wue2l9k" />
        <link rel="preload" as="image" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "NoorPath",
            "description": "Islamic prayer tracker and daily practice companion for Muslims",
            "operatingSystem": "iOS",
            "applicationCategory": "LifestyleApplication",
            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "url": "https://noorpath.app",
            "installUrl": "https://apps.apple.com/app/noorpath-prayer-companion/id6758610154"
          })}}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
