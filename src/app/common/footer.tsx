"use client";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-8 bg-[#233462] text-[#DBDEE8]">
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <a className="text-lg hover:text-[#CA819E] transition-colors" href="/contacto">Contacto</a>
        <a className="text-lg hover:text-[#CA819E] transition-colors" href="/reservas">Reservas</a>
        <a className="text-lg hover:text-[#CA819E] transition-colors" 
           href="https://www.instagram.com/lacasitadesabino/" 
           target="_blank" 
           rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className="mt-6 text-sm opacity-75">
        © {new Date().getFullYear()} La Casita de Sabino. Todos los derechos reservados.
      </div>
    </footer>
  );
}
