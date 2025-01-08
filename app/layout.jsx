import Navbar from "../components/Navbar";
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
  title: "Xhenonpro - Portfolio",
  description: "Welcome to the portfolio of Xhenonpro, a skilled web developer specializing in Next.js, Tailwind CSS, and full-stack development. Explore my projects and technical expertise.",
  openGraph: {
    title: "Xhenonpro - Portfolio",
    description: "Explore my web development projects, including a SACCO management system, school management system, online learning platform, and more.",
    url: "https://yourportfolio.com", // replace with your actual portfolio URL
    siteName: "Xhenonpro Portfolio",
    images: [
      {
        url: "/path/to/your/image.jpg", // replace with an image URL for Open Graph
        width: 800,
        height: 600,
        alt: "Xhenonpro Portfolio"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@xhenonpro", // replace with your Twitter handle
    creator: "@xhenonpro", // replace with your Twitter handle
    title: "Xhenonpro - Portfolio",
    description: "Explore the work of Xhenonpro, a web developer skilled in full-stack technologies.",
    image: "/path/to/your/image.jpg", // replace with an image URL for Twitter card
  },
  icons: {
    icon: "https://www.flaticon.com/free-icons/code", // path to your favicon icon in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
