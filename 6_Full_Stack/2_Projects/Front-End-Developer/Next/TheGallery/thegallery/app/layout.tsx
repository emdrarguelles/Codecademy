import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UrlBar from '../utils/UrlBar/UrlBar'
import Nav from '../components/navigation/Nav'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Gallery',
  description: 'Web app for browsing the Met Museum of Art public collection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <UrlBar baseURL="http://localhost:3000" />
        <Nav />
        {children}
      </body>
    </html>
  )
}