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

interface Translation {
  title: string;
  description: string;
  reserve: string;
  specialtiesTitle: string;
  specialties: string[];
  specialtiesDescription: string;
  aboutTitle: string;
  aboutText: string;
  aboutButton: string;
  menuTitle: string;
  menuDescription: string;
  menuButton: string;
  winesTitle: string;
  winesDescription: string;
  winesButton: string;
  pickupTitle: string;
  pickupDescription: string;
  pickupSteps: { text: string; icon: string }[];
  pickupButton: string;
  reserveTitle: string;
  reserveName: string;
  reservePhone: string;
  reservePeople: string;
  reservePersons: string;
  reserveButton: string;
  contactTitle: string;
  contactAddress: string;
  contactCity: string;
  contactPhone: string;
}

export const translations = {
  es: {
    title: "La esencia del Cantábrico en Valencia",
    description: "Pescados y mariscos frescos seleccionados diariamente de las mejores lonjas del norte",
    reserve: "Reservar mesa",
    specialtiesTitle: "Nuestras Especialidades",
    specialties: ["Pescados salvajes", "Mariscos frescos", "Recetas tradicionales"],
    specialtiesDescription: "Selección diaria de productos de máxima calidad",
    aboutTitle: "Conócenos",
    aboutText: "Desde 1995, La Casita de Sabino trae lo mejor del mar Cantábrico a Valencia. Nuestra pasión por el producto fresco y la cocina tradicional nos ha convertido en un referente de la gastronomía marinera en la Comunidad Valenciana.",
    aboutButton: "Descubre nuestra historia",
    menuTitle: "Nuestra Carta",
    menuDescription: "Descubre nuestra selección de pescados y mariscos frescos del día, preparados con el respeto que merece el producto del Cantábrico.",
    menuButton: "Ver carta",
    winesTitle: "Selección de Vinos",
    winesDescription: "Una cuidada carta de vinos nacionales e internacionales, seleccionados para maridar perfectamente con nuestros platos.",
    winesButton: "Ver vinos",
    pickupTitle: "Pedidos para Recoger",
    pickupDescription: "Disfruta de nuestros platos en casa. Realizamos pedidos para recoger de miércoles a domingo.",
    pickupSteps: [
      { text: "Realiza tu pedido con antelación", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { text: "Recógelo a la hora que prefieras", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { text: "Pago al recoger", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ],
    pickupButton: "Hacer pedido",
    reserveTitle: "Reserva tu mesa",
    reserveName: "Nombre",
    reservePhone: "Teléfono",
    reservePeople: "Número de personas",
    reservePersons: "personas",
    reserveButton: "Confirmar reserva",
    contactTitle: "Ubicación",
    contactAddress: "Calle Ejemplo 123",
    contactCity: "46001 Valencia",
    contactPhone: "Teléfono",
  },
  en: {
    title: "The essence of the Cantabrian Sea in Valencia",
    description: "Fresh fish and seafood selected daily from the best northern markets",
    reserve: "Reserve a table",
    specialtiesTitle: "Our Specialties",
    specialties: ["Wild fish", "Fresh seafood", "Traditional recipes"],
    specialtiesDescription: "Daily selection of top-quality products",
    aboutTitle: "About Us",
    aboutText: "Since 1995, La Casita de Sabino has brought the best of the Cantabrian Sea to Valencia. Our passion for fresh produce and traditional cuisine has made us a benchmark for seafood gastronomy in the Valencian Community.",
    aboutButton: "Discover our story",
    menuTitle: "Our Menu",
    menuDescription: "Discover our selection of fresh fish and seafood of the day, prepared with the respect that Cantabrian products deserve.",
    menuButton: "View menu",
    winesTitle: "Wine Selection",
    winesDescription: "A curated list of national and international wines, selected to perfectly pair with our dishes.",
    winesButton: "View wines",
    pickupTitle: "Pickup Orders",
    pickupDescription: "Enjoy our dishes at home. We offer pickup orders from Wednesday to Sunday.",
    pickupSteps: [
      { text: "Place your order in advance", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { text: "Pick it up at your preferred time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { text: "Pay upon pickup", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ],
    pickupButton: "Place order",
    reserveTitle: "Reserve your table",
    reserveName: "Name",
    reservePhone: "Phone",
    reservePeople: "Number of people",
    reservePersons: "people",
    reserveButton: "Confirm reservation",
    contactTitle: "Location",
    contactAddress: "Example Street 123",
    contactCity: "46001 Valencia",
    contactPhone: "Phone",
  },
  ca: {
    title: "L'essència del Cantàbric a València",
    description: "Peix i marisc fresc seleccionat diàriament dels millors mercats del nord",
    reserve: "Reserva taula",
    specialtiesTitle: "Les nostres especialitats",
    specialties: ["Peixos salvatges", "Marisc fresc", "Receptes tradicionals"],
    specialtiesDescription: "Selecció diària de productes de màxima qualitat",
    aboutTitle: "Coneix-nos",
    aboutText: "Des de 1995, La Casita de Sabino porta el millor del mar Cantàbric a València. La nostra passió pel producte fresc i la cuina tradicional ens ha convertit en un referent de la gastronomia marinera a la Comunitat Valenciana.",
    aboutButton: "Descobreix la nostra història",
    menuTitle: "La nostra carta",
    menuDescription: "Descobreix la nostra selecció de peixos i marisc fresc del dia, preparats amb el respecte que mereix el producte del Cantàbric.",
    menuButton: "Veure carta",
    winesTitle: "Selecció de vins",
    winesDescription: "Una cuidada carta de vins nacionals i internacionals, seleccionats per maridar perfectament amb els nostres plats.",
    winesButton: "Veure vins",
    pickupTitle: "Comandes per Recollir",
    pickupDescription: "Gaudeix dels nostres plats a casa. Fem comandes per recollir de dimecres a diumenge.",
    pickupSteps: [
      { text: "Fes la teva comanda amb antelació", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { text: "Recull-la a l'hora que prefereixis", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { text: "Pagament en recollir", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ],
    pickupButton: "Fer comanda",
    reserveTitle: "Reserva la teva taula",
    reserveName: "Nom",
    reservePhone: "Telèfon",
    reservePeople: "Número de persones",
    reservePersons: "persones",
    reserveButton: "Confirmar reserva",
    contactTitle: "Ubicació",
    contactAddress: "Carrer Exemple 123",
    contactCity: "46001 València",
    contactPhone: "Telèfon",
  },
};
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState<keyof typeof translations>("es");

  const images = [
    {
      src: "/DSC02856.jpg",
      alt: "Interior del restaurante La Casita de Sabino",
    },
    {
      src: "/DSC02849.jpg",
      alt: "Selección de mariscos frescos del Cantábrico",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => 
      setCurrentIndex(prev => (prev + 1) % images.length), 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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
      <Navbar 
        language={language} 
        onLanguageChange={(lang) => setLanguage(lang as keyof typeof translations)} 
      />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-screen-90 overflow-hidden">
            <div className="absolute inset-0 bg-overlay z-10"></div>
            <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
                  {translations[language].title}
                </h1>
                <p className="text-lg md:text-xl text-white mb-8">
                  {translations[language].description}
                </p>
                <a 
                  href="#reservar" 
                  className="btn-primary bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-700"
                  onClick={scrollToReservar}
                >
                  {translations[language].reserve}
                </a>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <div 
                className="relative h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
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
      {translations[language].specialtiesTitle}
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {translations[language].specialties.map((item, index) => (
        <div key={index} className="text-center p-6 bg-light rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-serif text-xl mb-4">{item}</h3>
          <p className="text-gray-600">{translations[language].specialtiesDescription}</p>
        </div>
      ))}
    </div>
  </div>
</section>

              {/* Conócenos Section */}
              <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
        {translations[language].aboutTitle}
      </h2>
      <p className="text-gray-700 mb-8">
        {translations[language].aboutText}
      </p>
      <Link href="/conocenos" className="btn-primary">
        {translations[language].aboutButton}
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
          {translations[language].menuTitle}
        </h2>
        <p className="text-gray-700 mb-6">
          {translations[language].menuDescription}
        </p>
        <Link href="/carta" className="btn-primary">
          {translations[language].menuButton}
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
          {translations[language].winesTitle}
        </h2>
        <p className="text-gray-700 mb-6">
          {translations[language].winesDescription}
        </p>
        <Link href="/vinos" className="btn-primary">
          {translations[language].winesButton}
        </Link>
      </div>
    </div>
  </div>
</section>

          {/* Pedidos para Recoger Section */}
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
        {translations[language].pickupTitle}
      </h2>
      <div className="space-y-4 mb-8">
        <p className="text-gray-700">
          {translations[language].pickupDescription}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {translations[language].pickupSteps.map((step, index) => (
            <div key={index} className="p-4 bg-light rounded-lg">
              <CustomIcon className="w-12 h-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}/>
                </svg>
              </CustomIcon>
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/pedidos" className="btn-primary">
        {translations[language].pickupButton}
      </Link>
    </div>
  </div>
</section>

{/* Reservas Section */}
<section id="reservar" className="py-20 bg-light">
  <div className="container mx-auto px-4">
    <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
      {translations[language].reserveTitle}
    </h2>
    <div className="max-w-xl mx-auto">
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder={translations[language].reserveName} className="input-primary" required />
          <input type="tel" placeholder={translations[language].reservePhone} className="input-primary" required />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <input type="date" className="input-primary" required />
          <select className="input-primary" required>
            <option value="">{translations[language].reservePeople}</option>
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} {translations[language].reservePersons}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-primary w-full">
          {translations[language].reserveButton}
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
          {translations[language].contactTitle}
        </h2>
        <address className="not-italic text-lg space-y-4">
          <p>{translations[language].contactAddress}</p>
          <p>{translations[language].contactCity}</p>
          <p>
            {translations[language].contactPhone}: 
            <a href="tel:+34123456789" className="hover:text-accent">
              +34 123 456 789
            </a>
          </p>
        </address>
      </div>
      <div className="h-80 relative rounded-lg overflow-hidden">
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1877672819205!2d-0.37422102352755604!3d39.4650866130083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ca767bba71%3A0xb1bd43670a719aad!2sLa%20Casita%20de%20Sabino%20Valencia!5e0!3m2!1ses!2ses!4v1738696050871!5m2!1ses!2ses"
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