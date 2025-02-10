import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

interface Translations {
  navbar?: {
    title: string;
    menu: {
      carta: string;
      vinos: string;
      nuestraHistoria: string;
      contacto: string;
    };
  };
}

const LanguageSelector = ({ language, onLanguageChange }: { language: string, onLanguageChange: (lang: string) => void }) => {
  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ca", label: "Català", flag: "🇨🇦" }
  ];

  return (
    <select
      value={language}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="p-2 border rounded bg-transparent text-[#DBDEE8] focus:outline-none"
    >
      {languages.map(({ code, flag, label }) => (
        <option key={code} value={code}>
          {flag} {label}
        </option>
      ))}
    </select>
  );
};

const Navbar = ({ language, onLanguageChange }: { language: string, onLanguageChange: (lang: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [translations, setTranslations] = useState<Translations>({});

  // Cargar traducciones según el idioma seleccionado
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) {
          throw new Error("No se pudo cargar la traducción");
        }
        const data: Translations = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTranslations();
  }, [language]); // Recargar cuando cambie el idioma

  return (
    <nav className="bg-[#233462] text-[#DBDEE8] py-6 px-8 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo o nombre del restaurante */}
        <Link href="/" className="text-2xl font-serif">
          {translations.navbar?.title || "Restaurante"}
        </Link>

        {/* Enlaces de navegación (versión escritorio) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/carta">
            {translations.navbar?.menu?.carta || "Carta"}
          </Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/vinos">
            {translations.navbar?.menu?.vinos || "Vinos"}
          </Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/nuestra-historia">
            {translations.navbar?.menu?.nuestraHistoria || "Nuestra Historia"}
          </Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/contacto">
            {translations.navbar?.menu?.contacto || "Contacto"}
          </Link>
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>

        {/* Botón de menú móvil */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#233462] border-t border-[#DBDEE8]/10">
          <div className="flex flex-col gap-4 p-8">
            <Link
              className="text-lg hover:text-[#CA819E] transition-colors"
              href="/carta"
              onClick={() => setMenuOpen(false)}
            >
              {translations.navbar?.menu?.carta || "Carta"}
            </Link>
            <Link
              className="text-lg hover:text-[#CA819E] transition-colors"
              href="/vinos"
              onClick={() => setMenuOpen(false)}
            >
              {translations.navbar?.menu?.vinos || "Vinos"}
            </Link>
            <Link
              className="text-lg hover:text-[#CA819E] transition-colors"
              href="/nuestra-historia"
              onClick={() => setMenuOpen(false)}
            >
              {translations.navbar?.menu?.nuestraHistoria || "Nuestra Historia"}
            </Link>
            <Link
              className="text-lg hover:text-[#CA819E] transition-colors"
              href="/contacto"
              onClick={() => setMenuOpen(false)}
            >
              {translations.navbar?.menu?.contacto || "Contacto"}
            </Link>
            <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
