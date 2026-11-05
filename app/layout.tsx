import "./global.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";

// Exposed as a CSS variable so stylesheets (e.g. the blog's tufte.css) can use
// the self-hosted Inter without pulling it from Google Fonts a second time.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "INTERFACE lab",
  description: "S Ganga Prasath's group page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} flex flex-col items-center justify-between h-auto w-full px-4 md:px-24 pt-16`}
      >
          {/* Navigation bar */}
          <NavBar />
          {children}
          {/* Shown only on pages taller than the window */}
          <BackToTop />
          {/* Footer */}
          <Footer />
      </body>
    </html>
  );
}
