import React from "react";
import SubscribeInput from "./Ui/SubscribeInput";
import { trans } from "@mongez/localization";
import { Section } from "react-sections-scroller";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { fbPage } from "@/constants/constants";

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-[#28408c]">
      <div className="py-10 container max-w-6xl mx-auto flex flex-col justify-center items-center gap-5">
        <h2 className="text-white text-center text-[36px] font-semibold">
          {trans("contact us and let us provide")} <br />{" "}
          {trans("the perfect design")}
        </h2>
        <div className=" flex justify-center gap-20 sm:justify-between w-full items-center">
          <Image
            src={"/Icons/144.png"}
            alt=""
            height={50}
            width={50}
            className="rounded-full animate-pulse size-[50px]"
          />
          <div className="text-[#fff]  flex gap-5 hover:text-[#31a0fe] cursor-pointer">
            <Link
              href={"tel:201015471713"}
              target="_black"
              className="flex gap-5 hover:text-[#31a0fe] cursor-pointer"
            >
              <FaPhoneAlt className="size-[24px]" />
              <p>+201015471713</p>
            </Link>
          </div>
          <div className="text-[#fff]  flex flex-col gap-5">
            <Link
              href={"https://wa.me/201148371185"}
              target="_black"
              className="flex gap-5 hover:text-[#31a0fe] cursor-pointer"

            >
              <FaWhatsapp className="size-[24px]" />
              <p>+201148371185</p>
            </Link>
          </div>
          <Link
            href={fbPage}
            target="_blank"
            className="flex flex-col items-center gap-5 text-[#fff] hover:text-[#31a0fe]"
          >
            <p className="w-fit">{trans("Social Media")}</p>
            <FaFacebook className=" size-[24px]" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
