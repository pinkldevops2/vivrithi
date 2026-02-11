// src/components/DrivingImpactSwiper.jsx
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrow_left_mob from "../../../public/arrow_left_mob.svg";

export default function ThinkTankSlider({ posts = [] }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  // Reading time function
  function getReadingTime(htmlContent) {
    if (!htmlContent) return "1 min read";
    const text = htmlContent.replace(/<[^>]*>/g, "").trim();
    const words = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  }

  if (!posts.length) return null;

  return (
    <div className="driving-impact-slider relative w-full bg-[#3bbae212] py-4">

      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides
        loop
        slidesPerView={1.1}
        spaceBetween={15}
        breakpoints={{
          768: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) =>
          setCurrentSlide(swiper.realIndex + 1)
        }
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {posts.map((post) => {
          const readTime = getReadingTime(post.blog?.description);
          const pdfUrl = post.blog?.uploadPdf?.node?.mediaItemUrl;
          const detailUrl = `/blog/${post.slug}`;
          const link = pdfUrl ? pdfUrl : detailUrl;

          return (
            <SwiperSlide key={post.id} className="!w-[85%]">
              <div className="w-full md:w-8/12 lg:w-5/12">

                {/* Image */}
                <div className="image-flash-container">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={
                        post.featuredImage?.node?.sourceUrl ||
                        "/Insights.png"
                      }
                      alt={post.title}
                    />
                  </a>
                </div>

                <div className="pt-[25px]">

                  {/* Category + Read Time */}
                  <span className="taxonomy_tag gradient-text text-sm">
                    {post.categories?.edges?.[0]?.node?.name || "Report"}{" "}
                    | {readTime}
                  </span>

                  {/* Title */}
                  <p className="max-w-3xl pt-[20px] leading-[24px] text-[#1B1B1B] text-lg">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </p>

                  {/* Date */}
                  <span className="taxonomy_date flex text-sm items-center gap-2 pt-[10px]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 0C4.40887 0 2.88274 0.632146 1.75707 1.75707C0.632078 2.88261 0 4.40887 0 6C0 7.59113 0.632146 9.11726 1.75707 10.2429C2.88261 11.3679 4.40887 12 6 12C7.59113 12 9.11726 11.3679 10.2429 10.2429C11.3679 9.11739 12 7.59113 12 6Z"
                        fill="#2E2E2E"
                      />
                    </svg>

                    {new Date(post.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                    })}
                  </span>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="container mx-auto flex justify-center items-center mb-4 gap-4 pt-4">
        <button className="swiper-button-prev-custom" aria-label="Previous Slide">
          <img src={arrow_left_mob.src} className="rotate-180" />
        </button>

        <button className="swiper-button-next-custom" aria-label="Next Slide">
          <img src={arrow_left_mob.src} />
        </button>
      </div>

    </div>
  );
}
