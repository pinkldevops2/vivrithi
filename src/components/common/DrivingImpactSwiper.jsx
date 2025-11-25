// src/components/DrivingImpactSwiper.jsx
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LogoShape from '../../../public/Vivrithi_logo.svg';

export default function DrivingImpactSwiper({ slides }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="driving-impact-slider relative w-full">
      {/* Header and Counter */}
      <div className="container mx-auto flex justify-between flex-col md:flex-row pb-8 px-4">
      
        <div className="w-[40%] flex items-end hidden md:flex">
          <h2 className="text-[35px] md:text-4xl font-heading leading-[35px] gradient-text">
            {currentSlide}
          </h2>{" "}
          / <span className="text-gray-700 font-medium">{slides.length}</span>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button className="swiper-button-prev-custom" aria-label="Previous Slide">
            {/* SVG prev arrow */}
          </button>
          <button className="swiper-button-next-custom" aria-label="Next Slide">
            {/* SVG next arrow */}
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2.5}
        centeredSlides={true} // ✅ Center mode
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Driving Impact Card */}
            <div className="relative p-6 banner_sub_grid_item_bg text-white driving-impact-card h-full flex flex-col justify-between">
              {/* Top Number */}
              <div className="number_fill text-sm">{slide.id}</div>

              {/* Content */}
              <div className="content_fill mt-4">
                <h3 className="text-lg uppercase">{slide.title}</h3>
                <p className="mt-2 desc text-sm md:text-lg">{slide.desc}</p>
              </div>

              {/* Logo */}
              <img
                src={LogoShape.src}
                alt="Vivrithi"
                className="w-[50px] h-auto absolute right-2 top-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
