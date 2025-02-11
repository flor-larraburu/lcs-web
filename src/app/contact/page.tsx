'use client';

import { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer"; // Asegúrate de tener este componente en tu proyecto

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
  }, [language]); // Ahora cambia dinámicamente cuando el idioma cambia

  const contact = translations?.footer?.contact;
  const reserve = translations?.footer?.reserve;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar language={language} onLanguageChange={(lang) => setLanguage(lang as "es" | "en" | "ca")} />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 bg-gray-100 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {contact?.title || "Contacto"}
        </h1>
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Dirección</h2>
            <p className="text-gray-600">{contact?.address}</p>
            <p className="text-gray-600">{contact?.city}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Teléfono</h2>
            <p className="text-gray-600">{contact?.phone}</p>
          </div>
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-700">{reserve?.title}</h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder={reserve?.name}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder={reserve?.phone}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder={reserve?.people}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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
