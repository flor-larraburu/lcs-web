"use client";

import { useState } from "react";
import Head from "next/head";
import { Footer } from "react-day-picker";
import { translations } from "../page";
import Navbar from "../common/navbar";

const About = () => {
  const [language, setLanguage] = useState<keyof typeof translations>("es");

  return (
    <>
      <Head>
        <title>{translations[language].aboutTitle}</title>
        <meta
          name="description"
          content="Conoce más sobre La Casita de Sabino y nuestra historia."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar
          language={language}
          onLanguageChange={(lang) => setLanguage(lang as keyof typeof translations)}
        />

        <main className="flex-1">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                {translations[language].aboutTitle}
              </h2>
              <p className="text-gray-700 mb-8">{translations[language].aboutText}</p>
              <p className="mb-8">{translations[language].reservePeople}</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
