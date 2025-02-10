import Navbar from "../common/navbar";

const Carta = ({ language, onLanguageChange }) => {
  return (
    <div>
      <Navbar language={language} onLanguageChange={onLanguageChange} />

      <main className="pt-24 bg-[#f0f0f0] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-serif text-[#233462]">Nuestra Carta</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">Entrantes</h2>
              <ul className="mt-4">
                <li className="text-lg text-[#233462]">- Croquetas de jamón ibérico</li>
                <li className="text-lg text-[#233462]">- Ensalada de temporada</li>
                <li className="text-lg text-[#233462]">- Tartar de atún</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">Platos Principales</h2>
              <ul className="mt-4">
                <li className="text-lg text-[#233462]">- Filete de ternera con salsa de trufa</li>
                <li className="text-lg text-[#233462]">- Paella de mariscos</li>
                <li className="text-lg text-[#233462]">- Risotto de setas</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#CA819E]">Postres</h2>
              <ul className="mt-4">
                <li className="text-lg text-[#233462]">- Tarta de queso con frutos rojos</li>
                <li className="text-lg text-[#233462]">- Crema catalana</li>
                <li className="text-lg text-[#233462]">- Mousse de chocolate</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carta;
