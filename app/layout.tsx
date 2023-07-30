import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import { ClientOnly } from './components/ClientOnly'
import { Modal } from './components/modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Endebete',
  description: 'Endebete , Rent better Home and Get Greate Roomate',
}

const font =Nunito({
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={ inter.className}>{children}</body> */}
      <ClientOnly >
        {/* <Modal  /> */}
      <Navbar />
      </ClientOnly>
      <div className={ font.className}>{children}</div>

    </html>
  )
}
