import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Mail',
  description: 'An email client template using the Next.js App Router.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
