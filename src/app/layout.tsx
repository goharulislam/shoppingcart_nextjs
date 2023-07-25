import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Navbar} from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'Next.js TypeScript Flowbite Tailwind css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <body className='bg-gray-100'>
        <ShoppingCartProvider>
        <Navbar />
        {children}
        </ShoppingCartProvider>
        <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
