import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { defaultSeoMeta } from '@/utills/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultSeoMeta()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <AntdRegistry>
            <Navbar />
            {children}
          </AntdRegistry>
        </Provider>
      </body>
    </html>
  )
}
