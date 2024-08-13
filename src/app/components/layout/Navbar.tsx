"use client";
import { trans } from "@mongez/localization";
import React, { useState } from "react";
import { SectionLink } from "react-sections-scroller";
import Button from "../Ui/Button";
import { langAtom } from "@/app/utils/lang-atom";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { ProjectArray } from "@/constants/constants";
export default function Navbar() {
  const [lang, setLang] = langAtom.useState();
  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full fixed top-0 left-1/2 transform -translate-x-1/2 py-2 bg-[#e1f4ff] z-50">
      <div
        className={`relative container  mx-auto max-w-6xl flex items-center justify-between z-50`}
      >
        <div className="flex items-center gap-3 px-1">
          <Image
            src={"/images/fslogo.png"}
            alt=""
            height={50}
            width={50}
            className="rounded-full animate-pulse size-[50px]"
          />
          <button
            onClick={toggleLanguage}
            className="bg-white hover:bg-[#31a0fe] rounded-3xl p-2 w-10 h-10 text-black"
          >
            {lang === "en" ? "EN" : "ع"}
          </button>
        </div>
        <nav className="hidden md:flex gap-10 capitalize">
          <SectionLink to="home">{trans("home")}</SectionLink>
          <SectionLink to="ourServices">{trans("Our Services")}</SectionLink>
          <SectionLink to="about">{trans("about")}</SectionLink>
          {ProjectArray.length > 0 && (
            <SectionLink to="projects">{trans("projects")}</SectionLink>
          )}
          <SectionLink to="contact">{trans("contact")}</SectionLink>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            className={`fixed ${
              lang === "en" ? "right-5" : "left-5"
            }  top-8 outline-none mobile-menu-button z-70`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-800 hover:text-red-500 transition-all ease-in-out" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0  bg-black bg-opacity-50 z-70 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full bg-white pt-16 shadow-xl z-50 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col py-4">
            <SectionLink
              className="py-2 text-xl text-gray-800 hover:bg-gray-200  px-4"
              to="home"
            >
              {trans("home")}
            </SectionLink>
            <SectionLink
              className="py-2 text-xl text-gray-800 hover:bg-gray-200  px-4"
              to="ourServices"
            >
              {trans("Our Services")}
            </SectionLink>
            <SectionLink
              className="py-2 text-xl text-gray-800 hover:bg-gray-200  px-4"
              to="about"
            >
              {trans("about")}
            </SectionLink>
            {ProjectArray.length > 0 && (
              <SectionLink
                className="py-2 text-xl text-gray-800 hover:bg-gray-200  px-4"
                to="projects"
              >
                {trans("projects")}
              </SectionLink>
            )}
            <SectionLink
              className="py-2 text-xl text-gray-800 hover:bg-gray-200  px-4"
              to="contact"
            >
              {trans("contact")}
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
