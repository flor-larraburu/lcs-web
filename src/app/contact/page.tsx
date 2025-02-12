"use client";

import { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

interface Translations {
  footer?: {
    contact?: {
      title: string;
      address: string;
      city: string;
      phone: string;
    };
    reserve?: {
      title: string;
      name: string;
      phone: string;
      people: string;
      persons: string;
      button: string;
    };
  };
}

const ContactPage = () => {
  const [translations, setTranslations] = useState<Translations>({});
  const [language, setLanguage] = useState<"es" | "en" | "ca">("es");

  useEffect(() => {
    async function fetchTranslations() {
      try {
        const response = await fetch(`/locales/${language}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    }
    fetchTranslations();
  }, [language]);

  const contact = translations?.footer?.contact;
  const reserve = translations?.footer?.reserve;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar language={language} onLanguageChange={(lang) => setLanguage(lang as "es" | "en" | "ca")} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-5xl font-serif italic text-[#233462] text-center mb-10">
          {contact?.title || "Contacto"}
        </h1>
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 border border-gray-200">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Dirección</h2>
            <p className="text-gray-600 text-lg">{contact?.address}</p>
            <p className="text-gray-600 text-lg">{contact?.city}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Teléfono</h2>
            <p className="text-gray-600 text-lg">{contact?.phone}</p>
          </div>
          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">{reserve?.title}</h2>
            <form className="mt-6 space-y-5">
              <input
                type="text"
                placeholder={reserve?.name}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <input
                type="tel"
                placeholder={reserve?.phone}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <input
                type="number"
                placeholder={reserve?.people}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 transition"
              >
                {reserve?.button}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
