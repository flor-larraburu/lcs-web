"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { translations } from "../page";

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

      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar
          language={language}
          onLanguageChange={(lang) => setLanguage(lang as keyof typeof translations)}
        />

        <main className="flex-1">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2 
                className="font-serif text-4xl md:text-5xl text-[#233462] mb-6 italic"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {translations[language].aboutTitle}
              </motion.h2>
              <motion.p 
                className="text-gray-700 text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {translations[language].aboutText}
              </motion.p>
            </div>
          </section>

          <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-16">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/about-1.jpg"
                alt="Historia de La Casita de Sabino"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 text-gray-700 text-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p>{translations[language].reservePeople}</p>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
