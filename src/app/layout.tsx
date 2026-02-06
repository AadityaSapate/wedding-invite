import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wedding Invitation - Join Us for Our Special Day",
  description: "You're invited to celebrate our wedding. RSVP to let us know you'll be there!",
  openGraph: {
    title: "Wedding Invitation",
    description: "Join us for our special day",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
