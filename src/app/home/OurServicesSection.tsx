import Image from "next/image";
import React from "react";
import Feature from "../components/Ui/Feature";
import { trans } from "@mongez/localization";
import { Section } from "react-sections-scroller";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FeatureArray } from "@/constants/constants";

export default function OurServicesSection() {
  const ref = useRef(null);
  return (
    <Section id="ourServices" className="">
      <div className="py-10 px-1 container max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5">
        <Image
          src={"/images/ourServices.svg"}
          width={543}
          height={626}
          alt=""
        />
        <motion.div
          className=""
          ref={ref}
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h3 className="text-center text-[36px] pb-5">
            {trans("Our Services")}
          </h3>
          {FeatureArray.map((feature, index) => (
            <Feature
              key={index}
              h3={trans(feature.h3)}
              p={trans(feature.p)}
              className={feature.className}
              imgclassName={feature.imgclassName}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
