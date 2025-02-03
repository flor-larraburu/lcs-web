"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#233462] text-[#DBDEE8] py-6 px-8 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-serif">La Casita de Sabino</Link>
        
        <div className="hidden md:flex gap-8">
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/menu">Carta</Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/reservas">Reservas</Link>
          <Link className="text-lg hover:text-[#CA819E] transition-colors" href="/contacto">Contacto</Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

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
          </div>
        </div>
      )}
    </nav>
  );
}