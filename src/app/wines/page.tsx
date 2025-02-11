"use client";

import { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

// Define las traducciones esperadas
interface Translations {
    wines: {
        winesTitle: string;
        winesDescription: string;
        winesItems: string[];
    };
}

const Vinos: React.FC = () => {
    // Estado del idioma, inicializado solo después de montar el componente
    const [language, setLanguage] = useState<"es" | "en" | "ca">();
    const [translations, setTranslations] = useState<Translations | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initialLang = localStorage.getItem("lang") as "es" | "en" | "ca" || "es";
        setLanguage(initialLang);
    }, []);

    useEffect(() => {
        if (!language) return;

        const loadTranslations = async () => {
            try {
                setLoading(true);
                setError(null);

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

    if (!language) {
        return null; // Evita el renderizado hasta que el idioma esté definido
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar language={language} onLanguageChange={(lang) => setLanguage(lang as "es" | "en" | "ca")} />
            <main className="pt-24 bg-[#f0f0f0] flex-grow">
                <div className="max-w-7xl mx-auto px-8 py-16">
                    {loading ? (
                        <div className="text-center">Cargando...</div>
                    ) : error || !translations ? (
                        <div className="text-red-500 text-center">
                            <p className="text-xl">{error || 'Error loading translations'}</p>
                            <button
                                onClick={() => setLanguage("es")}
                                className="mt-4 px-4 py-2 bg-[#233462] text-white rounded hover:bg-[#1a2648]"
                            >
                                Volver al español
                            </button>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-4xl font-serif text-[#233462]">{translations.wines.winesTitle}</h1>
                            <p className="text-lg text-[#233462] mt-4">{translations.wines.winesDescription}</p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                                {translations.wines.winesItems.map((item, index) => (
                                    <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                                        <p className="text-lg text-[#233462]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Vinos;
