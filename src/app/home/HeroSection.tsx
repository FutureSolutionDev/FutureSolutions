"use client";
import Button from "../components/Ui/Button";
import Image from "next/image";
import { trans } from "@mongez/localization";
import React from "react";
import { Section } from "react-sections-scroller";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section className="overflow-hidden">
      <Section
        id="home"
        className="pt-24 py-10 container max-w-6xl mx-auto flex flex-wrap justify-center text-center lg:text-start items-center  lg:justify-between gap-5"
      >
        <div className="flex flex-col justify-center  gap-4">
          <div className="flex justify-center w-full items-center lg:w-fit gap-2 bg-[#f3dcd5] rounded-full py-2 px-4">
            <Button className="bg-[#e67c40] px-4">{trans("New")}</Button>
            <p>{trans("Get Daily Updates")}</p>
          </div>
          <h1 className="text-[48px]">
            {" "}
            {trans("Innovative")} <br />
            {trans("Solutions for Your")} <br />
            {trans("Digital Needs")}
          </h1>
          <h3 className="text-[32px]">
            {trans("We bring your ideas to life")} <br />
            {trans("with cutting-edge")} <br />
            {trans("technology")}
          </h3>
          <p>{trans("Get Consultation")}</p>
          {/* <SubscribeInput/> */}
        </div>
        <Image src={'/images/hero.svg'} alt="" width={543} height={626} />
      </Section>
    </motion.section>
  );
}
