// import { Analytics } from "@vercel/analytics/react";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Navigation } from "@/components/layout/navbar";
// import MYFooter from "@/components/layout/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Website developer ",
//   description:
//     "I help contnet creators and small business owners to convert their audience into customers.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navigation />
//         {children}
//         <Analytics />
//         <MYFooter />
//       </body>
//     </html>
//   );
// }

import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/layout/navbar";
import MYFooter from "@/components/layout/footer";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: " Muhammad Sami | Luxury Real Estate Web Architect",
    template: "%s | Zia Khan"
  },
  description: "Specialized Web Architect for Real Estate Developers in Dubai & KSA. We build high-speed, investor-ready digital estates using Next.js.",
  keywords: ["Real Estate Web Design", "Dubai Web Developer", "Next.js Architecture", "Luxury Property Portals", "Riyadh Web Design"],
  openGraph: {
    title: "Zia Khan | Luxury Real Estate Web Architect",
    description: "Don't sell millions on a cheap website. Upgrade to a digital estate.",
    url: "www.sami-e.com",
    siteName: "Zia Khan Architecture",
    images: [
      {
        url: "/about-mee.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use a plain antialiased body class to avoid next/font/google turbopack issues */}
      <body className={`antialiased`}>
        <Navigation aria-label="Main Navigation" />
        {children}
        <Analytics />
        <MYFooter aria-label="Footer" />
      </body>
    </html>
  );
}
