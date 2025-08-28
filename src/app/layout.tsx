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
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { Navigation } from "@/components/layout/navbar";
import MYFooter from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Font display optimization
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Font display optimization
});

export const metadata = {
  title: "Website Developer",
  description:
    "I help content creators and small business owners to convert their audience into customers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation aria-label="Main Navigation" />
        {children}
        <Analytics />
        <MYFooter aria-label="Footer" />
      </body>
    </html>
  );
}
