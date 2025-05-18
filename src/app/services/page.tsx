import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading } from '@/components/text'

export const metadata = {
  title: 'Dịch vụ - CONVERGED SERVICES',
  description:
    'Các dịch vụ công nghệ hội tụ: AI, chuyển đổi số, điện toán đám mây, CNTT và bản đồ số cho doanh nghiệp.',
}

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">Dịch vụ và Sản phẩm</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Tất cả cần cho doanh nghiệp chuyển đổi số
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Các giải pháp AI hiện đại:</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Tối ưu hóa quy trình, phân tích dữ liệu chuyên sâu và tự động hóa</p>
              
                  <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc list-inside">
                    <li>Dự đoán hành vi khách hàng</li>
                    <li>Xử lý ngôn ngữ tự nhiên (NLP)</li>
                    <li>Nhận diện hình ảnh và giọng nói</li>
                    <li>Hệ thống gợi ý thông minh</li>
                  </ul>
                
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Chúng tôi đồng hành cùng doanh nghiệp trong lộ trình số hóa toàn diện</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Chuyển đổi số</p>
                
                  <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc list-inside">
                    <li>Tư vấn chiến lược chuyển đổi số  </li>
                    <li>Thiết kế quy trình tự động </li>
                    <li>Xây dựng hệ sinh thái số </li>
                    <li>Đào tạo nhân lực số </li>
                  </ul>
               
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              /> */}
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Giải pháp linh hoạt, an toàn và tiết kiệm chi phí:</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Điện toán đám mây (Cloud)</p>
                
                  <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc list-inside">
                    <li>Tư vấn & triển khai cloud (AWS, Azure, GCP)  </li>
                    <li>Quản trị hệ thống cloud</li>
                    <li>Migrate hệ thống lên cloud</li>
                    <li>Giải pháp bảo mật cloud</li>
                    <li>Giải pháp sao lưu và phục hồi dữ liệu</li>
                  </ul>
                
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              /> */}
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Hỗ trợ toàn diện hạ tầng công nghệ</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Dịch vụ CNTT</p>
                
                  <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc list-inside">

                    <li>Hỗ trợ kỹ thuật & bảo mật  </li>
                    <li>Phát triển phần mềm theo yêu cầu</li>
                    <li>Quản trị mạng</li>
                    <li>Quản trị cơ sở dữ liệu</li>
                    <li>Quản trị hệ thống ảo hóa</li>
                    <li>Quản trị hệ thống lưu trữ</li>
                  </ul>
                
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              /> */}
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Tích hợp bản đồ thông minh để nâng cao trải nghiệm người dùng và hỗ trợ vận hành hiệu quả</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Dịch vụ Bản đồ số (MAP)</p>
                
                  <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 list-disc list-inside">
  <li>Tích hợp Google Maps API và OpenStreetMap</li>
  <li>Hiển thị, tìm kiếm và định vị vị trí cửa hàng, chi nhánh, tuyến giao hàng theo thời gian thực</li>
  <li>Tùy chỉnh bản đồ theo thương hiệu và mục tiêu sử dụng</li>
  <li>Phân tích dữ liệu vị trí và phát triển ứng dụng bản đồ tùy chỉnh</li>
</ul>
                
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
