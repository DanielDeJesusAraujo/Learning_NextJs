import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PokeNext</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="og:title" content="PokeNext" />
        <link rel="icon" href="../assets/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
