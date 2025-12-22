import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface LaptopFrameSliderProps {
  laptopImage: string;
  slides: string[];
  sliderId?: string;
}

export default function LaptopFrameSlider({
  laptopImage,
  slides = [],
  sliderId = "laptop", // UNIQUE ID per instance
}: LaptopFrameSliderProps) {
  const nextClass = `${sliderId}-next`;
  const prevClass = `${sliderId}-prev`;

  return (
    <div className="laptop-frame-wrapper">
      {/* Laptop Image */}
      <img
        src={laptopImage}
        alt="Laptop Frame"
        className="laptop-frame"
      />

      {/* Screen Area */}
      <div className="laptop-screen">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
          }}
          className="laptop-swiper"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}