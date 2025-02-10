import Navbar from "../common/navbar";

const Vinos = ({ language, onLanguageChange }) => {
  return (
    <div>
      <Navbar language={language} onLanguageChange={onLanguageChange} />

      <main className="pt-24 bg-[#f0f0f0] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-serif text-[#233462]">Nuestra Carta de Vinos</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">Vinos Tintos</h2>
              <ul className="mt-4">
                <li className="text-lg text-[#233462]">- Rioja Reserva 2015</li>
                <li className="text-lg text-[#233462]">- Ribera del Duero Crianza</li>
                <li className="text-lg text-[#233462]">- Priorat Tinto 2020</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">Vinos Blancos</h2>
              <ul className="mt-4">
                <li className="text-lg text-[#233462]">- Albariño Rías Baixas</li>
                <li className="text-lg text-[#233462]">- Verdejo 2022</li>
                <li className="text-lg text-[#233462]">- Chardonnay Reserva</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">Vinos Rosados</h2>
              <ul className="mt-4">
                <li className="text-lg text-[#233462]">- Rosado de Garnacha</li>
                <li className="text-lg text-[#233462]">- Vino Rosado de Navarra</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vinos;
