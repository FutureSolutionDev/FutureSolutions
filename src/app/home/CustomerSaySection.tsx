"use client";
import React from "react";
import Button from "../components/Ui/Button";
import Testimonials from "../components/Ui/Testimonials";
import { trans } from "@mongez/localization";
import { Section } from "react-sections-scroller";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../components/styles/slider.css";
import { useRef } from "react";
type Testimo = {
  id: number;
  img: string;
  name: string;
  company: string;
  content: string;
};
export default function CustomerSaySection({
  TestimoArray,
}: {
  TestimoArray: Testimo[];
}) {
  const ref = useRef(null);
  return (
    <Section id="about" className="bg-[#28408c] text-white relative">
      <div className="py-10 container max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="" ref={ref}>
          <h3 className="text-[36px]">{trans("What Customers Say")}</h3>
          <p className="max-w-[614px] mb-10">{trans("lorem")}</p>
        </div>
        <div className="w-full relative group" ref={ref}>
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {TestimoArray.map((testimo, index) => (
              <SwiperSlide key={index}>
                <Testimonials
                  img={testimo.img}
                  name={trans(testimo.name)}
                  company={trans(testimo.company)}
                  content={trans(testimo.content)}
                  rating={4}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev absolute top-1/2 !left-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default"></div>
      <div className="swiper-button-next absolute top-1/2 !right-7 z-10 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default"></div>
    </Section>
  );
}
