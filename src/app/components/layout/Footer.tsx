"use client";
import React from "react";
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { trans } from "@mongez/localization";
import Image from "next/image";
import { fbPage, FooterArray } from "@/constants/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="bg-white">
        <section className="py-10 mx-1 container max-w-6xl lg:mx-auto bg-white flex flex-wrap justify-center  sm:justify-between items-center gap-10">
          {FooterArray.map((link, index) => (
            <div
              key={index}
              className="capitalize w-full sm:w-fit flex flex-col gap-5"
            >
              <h3 className="text-[16px] font-semibold">{trans(link.h3)}</h3>
              {Object.entries(link.data).map(([key, value], i) => {
                return (
                  <p
                    key={`${key}-${i}`}
                    className="hover:underline cursor-pointer"
                  >
                    {trans(value)}
                  </p>
                );
              })}
            </div>
          ))}
        </section>
      </section>
      <section>
        <section className="py-2 container max-w-6xl mx-auto capitalize text-center">
          {trans("all right reserved")?.replace("{YY}", new Date().getFullYear())}
        </section>
      </section>
    </footer>
  );
}
