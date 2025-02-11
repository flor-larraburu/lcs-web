'use client';

import { useState, useEffect } from "react";
import Navbar from "../common/navbar";

// Define las traducciones esperadas
interface Translations {
    menu:{
        menuTitle: string;
        starters: string;
        mainCourses: string;
        desserts: string;
        startersItems: string[];
        mainCoursesItems: string[];
        dessertsItems: string[];
    }

}

const Carta: React.FC = () => {
  // Estado del idioma
  const [language, setLanguage] = useState<"es" | "en" | "ca">("es");
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true);
        setError(null);

        // Se usa fetch para cargar archivos desde "public/"
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) throw new Error(`Error ${response.status}: No se encontró el archivo de traducción`);

        const data = await response.json();
        setTranslations(data);
      } catch (err) {
        console.error("Error loading translations:", err);
        setError(`Error al cargar las traducciones para ${language}`);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#233462]"></div>
      </div>
    );
  }

  if (error || !translations) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <p className="text-xl">{error || 'Error loading translations'}</p>
          <button
            onClick={() => setLanguage("es")}
            className="mt-4 px-4 py-2 bg-[#233462] text-white rounded hover:bg-[#1a2648]"
          >
            Volver al español
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar language={language} onLanguageChange={(lang) => setLanguage(lang as "es" | "en" | "ca")} />
      <main className="pt-24 bg-[#f0f0f0] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-serif text-[#233462]">{translations.menu.menuTitle}</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">{translations.menu.starters}</h2>
              <ul className="mt-4 space-y-2">
  {(translations?.menu?.startersItems ?? []).map((item, index) => (
    <li key={index} className="text-lg text-[#233462]">
      <span className="inline-block w-4">•</span> {item}
    </li>
  ))}
</ul>

            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">{translations.menu.mainCourses}</h2>
              <ul className="mt-4 space-y-2">
              {(translations?.menu?.mainCoursesItems ?? []).map((item, index) => (
                  <li key={index} className="text-lg text-[#233462]">
                    <span className="inline-block w-4">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">{translations.menu.desserts}</h2>
              <ul className="mt-4 space-y-2">
              {(translations?.menu?.dessertsItems ?? []).map((item, index) => (
                  <li key={index} className="text-lg text-[#233462]">
                    <span className="inline-block w-4">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carta;
