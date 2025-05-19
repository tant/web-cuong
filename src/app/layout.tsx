import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: {
    template: '%s - CONVERGED SERVICES',
    default: 'CONVERGED SERVICES - Review Our Company & Services',
  },
  description:
    'CONVERGED SERVICES: Learn about our company, services, and products. Make informed decisions to work with us. Available in Vietnamese and English.',
  metadataBase: new URL('https://cuong.tantran.dev'),
  openGraph: {
    title: 'CONVERGED SERVICES',
    description:
      'Review our company, services, and products. Decide to work with us.',
    url: 'https://cuong.tantran.dev',
    siteName: 'CONVERGED SERVICES',
    locale: 'vi_VN',
    type: 'website',
  },
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />

      </head>
      <body className="text-gray-950 antialiased">
        <div className="relative bg-transparent rounded-4xl">
          <Container className="relative">
            <Navbar
            // banner={
            //   <Link
            //     href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
            //     className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            //   >
            //     Radiant raises $100M Series A from Tailwind Ventures
            //     Tôi thử gõ một cái gì tiếng việt xem sao 
            //     <ChevronRightIcon className="size-4" />
            //   </Link>
            // }
            />
          </Container>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
