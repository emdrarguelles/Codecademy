import { ReactNode } from 'react'
import './globals.css'
import Nav from '../components/navigation/Nav'
import UrlBar from '../lib/UrlBar/UrlBar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <UrlBar/>
        <Nav/>
        {children}
      </body>
    </html>
  )
}