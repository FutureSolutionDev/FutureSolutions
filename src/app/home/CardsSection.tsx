"use client";
import React from "react";
import Image from "next/image";
import { trans } from "@mongez/localization";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CardsArray } from "@/constants/constants";

export default function CardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  return (
    <section className="bg-[#28408c] ">
      <motion.div
        ref={ref}
        // initial={{ opacity: 0, y: 500 }}
        // animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 500 }}
        // transition={{ duration: 1.3 }}
        className="py-10 px-1 container max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-5"
      >
        {CardsArray.map((card, index) => (
          <div
            key={index}
            className="p-1 m-1 bg-[#e1f4ff] h-[321px] w-full sm:w-[244px] rounded-3xl flex flex-col items-center gap-10 text-center"
          >
            <h3 className="text-[24px]">{trans(card.h3)}</h3>
            <Image src={card.img} alt="" width={60} height={60} priority className="text-red-500" />
            <p>{trans(card.p)}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
