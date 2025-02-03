"use client";

import Image from "next/image";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/DSC02849.jpg",
    "/DSC02856.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Gira cíclicamente
  };

  // Función para ir a la imagen anterior
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#233462]">
      <Navbar />

      <main
  className="flex-1 pt-32 px-8 bg-fixed bg-center relative"
  style={{
    backgroundImage: "url('/peces-1.jpg'), url('/rodaballo.jpg'), url('/pez-chulo.jpg')",
    backgroundSize: "auto", // Mantener tamaño original
    backgroundRepeat: "no-repeat", // No repetir la imagen
    backgroundPosition: "center", // Centrar la imagen
    backgroundColor: "#ffffff", // Fondo blanco
    minHeight: "calc(100vh - 160px)", // Para que el fondo cubra el contenido, ajustando al tamaño del navbar y footer
  }}
>
  <div className="absolute inset-0 bg-white opacity-50 z-0"></div> {/* Capa de transparencia blanca */}
  <div className="relative z-10">
    {/* Contenido principal */}
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-[#233462]">
            La esencia del Cantábrico en Valencia
          </h1>
          <p className="text-lg text-[#233462] leading-relaxed">
            Disfruta de los mejores pescados y mariscos frescos seleccionados
            directamente de las lonjas y puertos del Cantábrico.
          </p>
          <a
            className="inline-block px-8 py-4 bg-[#233462] text-[#DBDEE8] 
                       rounded-full text-lg font-medium hover:bg-[#CA819E] 
                       transition-colors"
            href="/menu"
          >
            Ver Carta
          </a>
        </div>

        {/* Carrusel de imágenes */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <div
            className="flex transition-all duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`Restaurante La Casita de Sabino ${index}`}
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={goToPrev}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            onClick={goToNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Sección de contacto */}
  <div className="bg-[#233462] text-[#DBDEE8] py-16">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulario de contacto */}
        <div className="space-y-6 h-full flex flex-col justify-between">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 rounded-md bg-[#DBDEE8] text-[#233462] border border-[#233462]"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded-md bg-[#DBDEE8] text-[#233462] border border-[#233462]"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 rounded-md bg-[#DBDEE8] text-[#233462] border border-[#233462]"
            rows={4}
          />
          <button className="w-full py-3 bg-[#CA819E] text-white rounded-md hover:bg-[#233462] transition-colors">
            Enviar mensaje
          </button>
        </div>
        {/* Información de contacto */}
        <div className="space-y-6 h-full flex flex-col justify-between">
          <p className="font-semibold">Dirección</p>
          <p>Calle Ejemplo 123, Valencia, España</p>
          <p className="font-semibold">Teléfono</p>
          <p>+34 123 456 789</p>
          <p className="font-semibold">Correo electrónico</p>
          <p>contacto@casitadesabino.com</p>
        </div>
      </div>
    </div>
  </div>
</main>

      <Footer />
    </div>
  );
}
