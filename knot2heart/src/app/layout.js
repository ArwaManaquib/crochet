import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "700", "800"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "Knot2Heart - Crafting Stories, One Stitch at a Time",
  description:
    "Welcome to Knot2Heart, where every loop tells a tale of creativity and passion. Dive into our cozy corner of crochet, filled with inspiration, tutorials, and a community that celebrates the art of handmade.",
  keywords: "crochet, knitting, handmade, tutorials, patterns, crafts, DIY",
  authors: [{ name: "Sarah Miller" }],
  openGraph: {
    title: "Knot2Heart - Crafting Stories, One Stitch at a Time",
    description:
      "Welcome to Knot2Heart, where every loop tells a tale of creativity and passion.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${notoSans.variable}`}
    >
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
