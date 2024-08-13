import React, { useState } from "react";
import ProjectSection from "../components/ProjectSection";
import { trans } from "@mongez/localization";
import { Section } from "react-sections-scroller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../components/styles/slider.css";
import { useRef } from "react";
import { motion } from "framer-motion";
type Project = {
  id: number;
  img: string;
  h3: string;
  p: string;
  active: boolean;
};

export default function OurProjectsSection({
  ProjectArray,
}: {
  ProjectArray: Project[];
}) {
  const [projects, setProjects] = useState<Project[]>(ProjectArray);

  const toggleActive = (id: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => ({
        ...project,
        active: project.id === id,
      }))
    );
  };
  const ref = useRef(null);
  return (
    <Section id="projects" className="py-16 bg-gray-100">
      <div className="py-10 container max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -500 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {trans("Our Previous Projects")}
          </h2>
          <p className="max-w-[614px] text-lg mb-8 text-center">
            {trans("lorem")}
          </p>
        </motion.div>

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
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectSection
                  img={project.img}
                  h3={project.h3}
                  p={project.p}
                  active={project.active}
                  onClick={() => toggleActive(project.id)}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination absolute !-bottom-5 left-1/2 transform -translate-x-1/2 z-10"></div>
          </Swiper>
        </div>
      </div>
    </Section>
  );
}
