import React from "react";
import HeroSection from "./HeroSection";
import CardsSection from "./CardsSection";
import OurServicesSection from "./OurServicesSection";
import CustomerSaySection from "./CustomerSaySection";
import OurProjectsSection from "./OurProjectsSection";
import ContactSection from "../components/ContactSection";
import { ProjectArray, TestimoArray } from "@/constants/constants";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CardsSection />
      <OurServicesSection />
    {TestimoArray.length > 0 && <CustomerSaySection TestimoArray={TestimoArray} />}
      {ProjectArray.length > 0 && <OurProjectsSection ProjectArray={ProjectArray} />}
      <ContactSection />
    </div>
  );
}
