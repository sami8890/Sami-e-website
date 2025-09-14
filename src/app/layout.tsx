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

export const metadata = {
  title: "Sami",
  description:
    "I help content creators and small business owners to convert their audience into customers.",
  icons: {
    icon: [{ url: "/header-logo.png", type: "image/png", sizes: "32x32" }],
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
