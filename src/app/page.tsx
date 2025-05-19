
import { Button } from '@/components/button'
import { Container } from '@/components/container'


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CONVERGED SERVICES - Review Our Company & Services',
  description:
    'CONVERGED SERVICES: Learn about our company, services, and products. Make informed decisions to work with us. Available in Vietnamese and English.',
  openGraph: {
    title: 'CONVERGED SERVICES',
    description:
      'Review our company, services, and products. Decide to work with us.',
    url: 'https://www.csgroup.asia/',
    siteName: 'CONVERGED SERVICES',
    locale: 'vi_VN',
    type: 'website',
  },

}

function Hero() {
  return (
    <div className="relative bg-transparent rounded-4xl">
      <Container className="relative">
        
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Cùng chuyển đổi số
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Chúng tôi mang đến giải pháp hội tụ công nghệ toàn diện: AI, chuyển đổi số, điện toán đám mây và dịch vụ CNTT, giúp doanh nghiệp phát triển linh hoạt và bền vững.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/services">Tìm hiểu dịch vụ</Button>
            <Button variant="secondary" href="/contact">
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
  
      </main>
  
      
    </div>
  )
}
