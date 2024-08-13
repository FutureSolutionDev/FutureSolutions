"use client"
import { Suspense, useEffect, useState } from "react";
import HomePage from "./home/HomePage";
import { langAtom } from "./utils/lang-atom";
import { extend, setLocalizationConfigurations } from "@mongez/localization";
import ar from "../config/ar.json";
import en from "../config/en.json";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function Home() {
  const lang = langAtom.useValue()
  const [, forceUpdate] = useState({});
  useEffect(() => {
    setLocalizationConfigurations({defaultLocaleCode: lang})
    extend("en", en)
    extend("ar", ar)
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.body.dir = lang === 'en' ? 'ltr' : 'rtl';
    forceUpdate({});
  }, [lang]);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar/>
        <HomePage/>
      <Footer/>
    </main>
  );
}
