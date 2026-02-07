import "./globals.css";
import Navbar from "@/src/components/navbar";
import { Metadata } from "next";
import PageLoader from "../components/loading";

export const metadata: Metadata = {
  metadataBase: new URL("https://ericman.dev"),
  alternates: {
    canonical: "https://ericman.dev",
  },

  title: "Eric Man | Web Developer Portfolio",
  description:
    "Hi, I'm Eric Man — a frontend developer specializing in React and modern web design. Check out my projects!",
  authors: [{ name: "Eric Man" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Eric Man",
    "web developer",
    "React",
    "Next.js",
    "portfolio",
    "frontend developer",
  ],
  openGraph: {
    siteName: "Eric Man",
    title: "Eric Man | Web Developer Portfolio",
    description:
      "Frontend developer building clean, modern, and responsive web apps with React.",
    url: "https://ericman.dev",
    type: "website",
    images: [
      {
        url: "/showcase/ericman.dev.png",
        width: 1200,
        height: 630,
        alt: "Eric Man Portfolio Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Man | Web Developer Portfolio",
    description: "Frontend developer specializing in modern React web design.",
    images: ["/showcase/ericman.dev.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body>
        <PageLoader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
