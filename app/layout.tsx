import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "INTERFACE lab",
  description: "S Ganga Prasath's group page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main className="flex flex-col h-auto w-auto items-center justify-between px-24">
          {/* Navigation bar */}
          <NavBar />
          {children}
          {/* Footer */}
          <Footer />
        </main>
    </html>
  )
}
