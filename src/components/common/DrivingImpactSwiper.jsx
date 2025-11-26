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
      {/* Navigation */}
      <div className="container mx-auto flex justify-center items-center mb-4">
        <button className="swiper-button-prev-custom" aria-label="Previous Slide"></button>
        <button className="swiper-button-next-custom" aria-label="Next Slide"></button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}         // 👈 Important
        spaceBetween={20}              // 👈 gap between slides
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "75%" }}   // 👈 MAIN FIX: Show 0.25 slide preview on both sides
          >
            <div className="relative p-6 banner_sub_grid_item_bg text-white driving-impact-card h-full flex flex-col justify-between">
              <div className="number_fill text-sm">{slide.id}</div>

              <div className="content_fill mt-4">
                <h3 className="text-lg uppercase">{slide.title}</h3>
                <p className="mt-2 desc text-sm md:text-lg">{slide.desc}</p>
              </div>

              <img
                src={LogoShape.src}
                alt="Vivrithi"
                className="w-[50px] h-auto absolute right-2 top-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="bg-white w-full px-[20px]">
      <a 
  href="/contact" 
  class="contact_cta w-full md:w-auto inline-flex w-auto mt-[20px] contact_cta3 items-center gap-2 text-white uppercase hover:text-blue-600 transition mb-2 px-[30px] py-[10px] text-[14px] justify-center"
>
  <span data-text="Know our story">Know our story</span>
  <img src={LogoShape.src} alt="Vivrithi" class="w-5 h-5" />
</a>
</div>
    </div>
  );
}