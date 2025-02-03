// page.js
import Image from "next/image";
import Navbar from "./common/navbar";
import Footer from "./common/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Image
                className="w-48 h-auto"
                src="/logo.png"
                alt="La Casita de Sabino logo"
                width={180}
                height={38}
                priority
              />
              <h1 className="text-4xl md:text-5xl font-serif text-[#233462]">
                La esencia del Cantábrico en Valencia
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
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
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/api/placeholder/800/500"
                alt="Restaurante La Casita de Sabino"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}