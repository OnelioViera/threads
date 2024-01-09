import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '@/components/shared/shared/Topbar'
import LeftSidebar from '@/components/shared/shared/LeftSidebar'
import RightSidebar from '@/components/shared/shared/RightSidebar'
import Bottombar from '@/components/shared/shared/Bottombar'


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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main>
          <LeftSidebar />

          <section className='main-content'>
            <div className='w-full max-w-4xl'>
              {children}
            </div>
          </section>

          <RightSidebar />
        </main>
        <Bottombar />
        </body>
    </html>
    </ClerkProvider>
  )
}
