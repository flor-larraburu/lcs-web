"use client";

import { useState, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import { motion } from "framer-motion";

interface Translations {
    menu: {
        menuTitle: string;
        starters: { title: string; items: string[] };
        wildFish: { title: string; items: string[] };
        seasonalStarters: { title: string; items: string[] };
        otherProposals: { title: string; items: string[] };
        meats: { title: string; items: string[] };
        sideDishes: { title: string; items: string[] };
    };
}

const defaultTranslations: Translations = {
    menu: {
        menuTitle: "Menú",
        starters: { title: "Entrantes", items: [] },
        wildFish: { title: "Pescado Salvaje", items: [] },
        seasonalStarters: { title: "Entrantes de Temporada", items: [] },
        otherProposals: { title: "Otras Propuestas", items: [] },
        meats: { title: "Carnes", items: [] },
        sideDishes: { title: "Guarniciones", items: [] }
    }
};

const Carta: React.FC = () => {
    const [language, setLanguage] = useState<"es" | "en" | "ca">(() => {
        if (typeof window === "undefined") return "es";
        return (localStorage.getItem("lang") as "es" | "en" | "ca") || "es";
    });
    
    const [translations, setTranslations] = useState<Translations>(defaultTranslations);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleLanguageChange = (newLang: "es" | "en" | "ca") => {
        setLanguage(newLang);
        if (typeof window !== "undefined") {
            localStorage.setItem("lang", newLang);
        }
    };

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(`/locales/${language}.json?v=${Date.now()}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setTranslations(data);
            } catch (err) {
                console.error('Translation loading error:', err);
                setError(
                    `Error al cargar las traducciones para ${language}. ` +
                    `Por favor, verifique que el archivo /locales/${language}.json existe.`
                );
                setTranslations(defaultTranslations);
            } finally {
                setLoading(false);
            }
        };

        loadTranslations();
    }, [language]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar language={language} onLanguageChange={handleLanguageChange} />
            <main className="pt-24 bg-[#f0f0f0] flex-grow">
                <div className="max-w-4xl mx-auto px-8 py-16">
                    {loading ? (
                        <div className="text-center">Cargando...</div>
                    ) : error ? (
                        <div className="text-red-500 text-center">
                            <p className="text-xl">{error}</p>
                            <button
                                onClick={() => handleLanguageChange("es")}
                                className="mt-4 px-4 py-2 bg-[#233462] text-white rounded hover:bg-[#1a2648]"
                            >
                                Volver al español
                            </button>
                        </div>
                    ) : (
                        <>
                            <motion.h1 
                                className="text-5xl font-serif italic text-[#233462] text-center mb-10"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 2 }}
                            >
                                {translations.menu.menuTitle}
                            </motion.h1>
                            {Object.keys(translations.menu)
                                .filter(key => key !== "menuTitle")
                                .map((sectionKey, index) => {
                                    const section = translations.menu[sectionKey];
                                    return (
                                        section?.items && (
                                            <motion.div 
                                                key={sectionKey} 
                                                className="mb-12"
                                                initial={{ opacity: 0, y: 50 }} 
                                                whileInView={{ opacity: 1, y: 0 }} 
                                                transition={{ duration: 0.7 }}
                                            >
                                                <h2 className="text-4xl font-serif italic text-[#CA819E] mb-4">
                                                    {section.title}
                                                </h2>
                                                <ul className="space-y-2">
                                                    {section.items.map((item, idx) => (
                                                        <motion.li 
                                                            key={idx} 
                                                            className="text-2xl text-[#233462]"
                                                            initial={{ opacity: 0 }} 
                                                            whileInView={{ opacity: 1 }} 
                                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                        >
                                                            <span className="inline-block w-4">•</span> {item}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )
                                    );
                            })}
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Carta;
