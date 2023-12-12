import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokeinfo',
  description: 'List all pokemons',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "h-screen overflow-hidden"}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}
