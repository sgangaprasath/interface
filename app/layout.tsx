import "./global.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="flex flex-col items-center justify-between h-auto w-full px-24 pt-16">
          {/* Navigation bar */}
          <NavBar />
          {children}
          {/* Footer */}
          <Footer />
      </body>
    </html>
  );
}
