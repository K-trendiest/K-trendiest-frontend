import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar'
import { AnimatePresence, motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'K-trenditest',
  description: 'Introduce daily rankings of Korean music, movies, and videos.',
}

// const categoryDetails = {
//   music: {
//       backgroundColor: '#FFFFFF',
//       pointColor: '#0466C8'
//   },
//   youtube: {
//       backgroundColor: '#000000',
//       pointColor: '#D90429'
//   },
//   movie: {
//       backgroundColor: '#001F54',
//       pointColor: '#FDC500'
//   },
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    // const pathname = usePathname();
    // const category = pathname.replace('/', '') as keyof typeof categoryDetails;
    // const categoryDetail = categoryDetails[category];
    
    // if (!categoryDetail) {jkgh
    //     return <div>Category not found</div>;
    // }

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar curpath={pathname} pointColor={categoryDetail.pointColor} /> */}
        {children}
        </body>
    </html>
  )
}