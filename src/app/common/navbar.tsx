"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#233462] text-[#DBDEE8] py-6 px-8 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo o nombre del restaurante */}
        <Link href="/" className="text-2xl font-serif">La Casita de Sabino</Link>
        
        {/* Enlaces de navegación (versión escritorio) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/menu">Carta</Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/reservas">Reservas</Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/contacto">Contacto</Link>

          {/* Selector de idioma */}
          <select 
            value={language} 
            onChange={(e) => onLanguageChange(e.target.value)}
            className="p-2 border rounded bg-transparent text-[#DBDEE8] focus:outline-none"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="ca">Català</option>
          </select>
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
            <Link className="text-lg hover:text-[#CA819E] transition-colors" 
                  href="/menu" 
                  onClick={() => setMenuOpen(false)}>Carta</Link>
            <Link className="text-lg hover:text-[#CA819E] transition-colors" 
                  href="/reservas" 
                  onClick={() => setMenuOpen(false)}>Reservas</Link>
            <Link className="text-lg hover:text-[#CA819E] transition-colors" 
                  href="/contacto" 
                  onClick={() => setMenuOpen(false)}>Contacto</Link>

            {/* Selector de idioma (versión móvil) */}
            <select 
              value={language} 
              onChange={(e) => onLanguageChange(e.target.value)}
              className="p-2 border rounded bg-transparent text-[#DBDEE8] focus:outline-none"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="ca">Català</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}