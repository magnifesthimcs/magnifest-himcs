import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const sponsors = [
  {
    id: 1,
    name: 'Hum Tum Electronics',
    logo: '/assets/sponsors/sponsor pic.png',
    type: 'Title'
  },
  {
    id: 2,
    name: 'Coca Cola',
    logo: '/assets/sponsors/2.jpg',
    type: 'Beverage Partner'
  },
  {
    id: 3,
    name: 'Pride Academy',
    logo: '/assets/sponsors/1.jpg',
    type: 'Presenting'
  },
  {
    id: 4,
    name: 'BM Computers',
    logo: '/assets/sponsors/3.jpg',
    type: 'Presenting'
  },
  {
    id: 5,
    name: 'Pixel Truth',
    logo: '/assets/sponsors/4.jpg',
    type: 'Presenting'
  }
]

const SponsorSlider = () => {
  return (
    <div className="py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <div className="flex flex-col items-center">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-xs text-gray-500 mt-2">{sponsor.type} Sponsor</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SponsorSlider