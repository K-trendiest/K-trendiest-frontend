import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ weight: '600', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'K-trendiest - youtube',
    template: 'K-trendiest - %s',
  },
  description: 'Introduce daily rankings of Korean music, movies, and videos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansKR.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
