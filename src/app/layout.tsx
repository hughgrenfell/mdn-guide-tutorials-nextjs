import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MDN Tutorial Practice',
  description: 'Assignments from the MDN guide tutorials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <div className="flex basis-1/12">
            <NavBar />
          </div>
          <div className="flex basis-11/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
