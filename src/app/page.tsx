"use client";

import Image from "next/image";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

interface CustomIconProps {
  children: ReactNode;
  className?: string;
}

const CustomIcon = ({ children, className = "" }: CustomIconProps) => (
  <div className={`w-16 h-16 mx-auto flex items-center justify-center ${className}`}>
    {children}
  </div>
);
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/DSC02856.jpg",
      alt: "Interior del restaurante La Casita de Sabino"
    },
    {
      src: "/DSC02849.jpg",
      alt: "Selección de mariscos frescos del Cantábrico"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => 
      setCurrentIndex(prev => (prev + 1) % images.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToReservar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('reservar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>La Casita de Sabino | Restaurante de Pescados y Mariscos del Cantábrico en Valencia</title>
        <meta name="description" content="Disfruta de los mejores pescados y mariscos frescos del Cantábrico en Valencia. Selección diaria de productos de primera calidad directamente de las lonjas del norte." />
        <meta name="keywords" content="restaurante pescados valencia, marisco cantabrico, pescado fresco valencia, restaurante gourmet valencia" />
        <meta property="og:title" content="La Casita de Sabino - Pescados y Mariscos del Cantábrico" />
        <meta property="og:description" content="Restaurante especializado en pescados y mariscos frescos del Cantábrico en Valencia" />
        <meta property="og:image" content="/og-image.webp" />
        <link rel="canonical" href="https://lacasitadesabino.com" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-screen-90 overflow-hidden">
            <div className="absolute inset-0 bg-overlay z-10"></div>
            <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
                  La esencia del Cantábrico en Valencia
                </h1>
                <p className="text-lg md:text-xl text-white mb-8">
                  Pescados y mariscos frescos seleccionados diariamente de las mejores lonjas del norte
                </p>
                <a href="#reservar" 
                   className="btn-primary"
                   onClick={scrollToReservar}>
                  Reservar mesa
                </a>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <div className="relative h-full w-full transition-transform duration-700 ease-in-out"
                   style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <div key={index} className="absolute inset-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="100vw"
                      quality={90}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Especialidades Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
                Nuestras Especialidades
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {['Pescados salvajes', 'Mariscos frescos', 'Recetas tradicionales'].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-light rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-xl mb-4">{item}</h3>
                    <p className="text-gray-600">Selección diaria de productos de máxima calidad</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

              {/* Conócenos Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
              <CustomIcon>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M20 7a4 4 0 01-4-4
                             M9 6a4 4 0 100-8 4 4 0 000 8z
                             M18.377 14.827l-.708-2.797
                             M12.119 12.119a4 4 0 00-5.657 5.657
                             M12 4.354a4 4 0 11-5.657 5.657" />
                  </svg>
                </CustomIcon>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                  Conócenos
                </h2>
                <p className="text-gray-700 mb-8">
                  Desde 1995, La Casita de Sabino trae lo mejor del mar Cantábrico a Valencia. 
                  Nuestra pasión por el producto fresco y la cocina tradicional nos ha convertido 
                  en un referente de la gastronomía marinera en la Comunidad Valenciana.
                </p>
                <Link href="/conocenos" 
                      className="btn-primary">
                  Descubre nuestra historia
                </Link>
              </div>
            </div>
          </section>

          {/* Carta y Vinos Section */}
          <section className="py-20 bg-light">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Carta Subsection */}
                <div className="text-center">
                  <CustomIcon>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </CustomIcon>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
                    Nuestra Carta
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Descubre nuestra selección de pescados y mariscos frescos del día, 
                    preparados con el respeto que merece el producto del Cantábrico.
                  </p>
                  <Link href="/carta" 
                        className="btn-primary">
                    Ver carta
                  </Link>
                </div>
                
                {/* Vinos Subsection */}
                <div className="text-center">
                <CustomIcon>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 22h8l-4-4-4 4z
                               M12 18V8
                               M6 3h12l-3 5h-6l-3-5z
                               M9 8h6" />
                    </svg>
                  </CustomIcon>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
                    Selección de Vinos
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Una cuidada carta de vinos nacionales e internacionales, 
                    seleccionados para maridar perfectamente con nuestros platos.
                  </p>
                  <Link href="/vinos" 
                        className="btn-primary">
                    Ver vinos
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Pedidos para Recoger Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <CustomIcon>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </CustomIcon>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                  Pedidos para Recoger
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700">
                    Disfruta de nuestros platos en casa. Realizamos pedidos para recoger 
                    de miércoles a domingo.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-light rounded-lg">
                      <CustomIcon className="w-12 h-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </CustomIcon>
                      <p className="text-gray-700">Realiza tu pedido con antelación</p>
                    </div>
                    <div className="p-4 bg-light rounded-lg">
                      <CustomIcon className="w-12 h-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </CustomIcon>
                      <p className="text-gray-700">Recógelo a la hora que prefieras</p>
                    </div>
                    <div className="p-4 bg-light rounded-lg">
                      <CustomIcon className="w-12 h-12">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                        </svg>
                      </CustomIcon>
                      <p className="text-gray-700">Pago al recoger</p>
                    </div>
                  </div>
                </div>
                <Link href="/pedidos" 
                      className="btn-primary">
                  Hacer pedido
                </Link>
              </div>
            </div>
          </section>


          {/* Reservas Section */}
          <section id="reservar" className="py-20 bg-light">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
                Reserva tu mesa
              </h2>
              <div className="max-w-xl mx-auto">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="input-primary"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="input-primary"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="date"
                      className="input-primary"
                      required
                    />
                    <select className="input-primary" required>
                      <option value="">Número de personas</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} personas</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Confirmar reserva
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Contacto Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6">
                    Ubicación
                  </h2>
                  <address className="not-italic text-lg space-y-4">
                    <p>Calle Ejemplo 123</p>
                    <p>46001 Valencia</p>
                    <p>Tel: <a href="tel:+34123456789" className="hover:text-accent">+34 123 456 789</a></p>
                  </address>
                </div>
                <div className="h-80 relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}