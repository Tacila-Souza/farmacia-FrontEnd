import { Heartbeat, Pill, Truck } from "@phosphor-icons/react";
import farmaciaImg from '../../assets/farmacia.png';

function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#6A5AF9] to-[#BB2ED7]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Coluna esquerda — Texto */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Farm Villa
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Sua saúde merece atenção total. Desde remédios até cuidados diários, estamos aqui por você.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <a 
                href="/categorias"
                className="px-6 py-3 bg-white text-[#6A5AF9] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                Lista de Categorias
              </a>
              <a 
                href="/cadastrarCategoria"
                className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#6A5AF9] transition"
              >
                Cadastrar Categoria
              </a>
            </div>
          </div>

          {/* Coluna direita — Imagem */}
          <div className="flex justify-center md:justify-end">
            <img
              src={farmaciaImg}
              alt="Farmácia"
              className="w-4/5 md:w-full rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Seção de Destaques — cards coloridos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Por que escolher Farm Villa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#6A5AF9] to-[#BB2ED7] text-white hover:scale-105 transform transition">
              <Truck size={40} weight="bold" className="mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p>Receba seus produtos com agilidade e segurança, direto na sua casa.</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition">
              <Pill size={40} weight="bold" className="mx-auto mb-4 text-[#6A5AF9]"/>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Variedade</h3>
              <p>Encontre todos os produtos farmacêuticos que você precisa, de forma confiável.</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl shadow-lg bg-[#BB2ED7] text-white hover:scale-105 transform transition">
              <Heartbeat size={40} weight="bold" className="mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
              <p>Equipe pronta para auxiliar você sempre que precisar, com atenção e cuidado.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Serviços — cards horizontais */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Nossos Serviços</h2>
          <div className="flex flex-col md:flex-row gap-8">

            {/* Serviço 1 */}
            <div className="flex-1 bg-[#6A5AF9]/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-lg transition">
              <Truck size={48} weight="bold" className="text-[#6A5AF9]"/>
              <div>
                <h3 className="text-xl font-semibold mb-2">Entrega Domiciliar</h3>
                <p className="text-gray-700">Receba seus medicamentos diretamente em casa com segurança e rapidez.</p>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="flex-1 bg-[#BB2ED7]/10 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-lg transition">
              <Pill size={48} weight="bold" className="text-[#BB2ED7]"/>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consulta Farmacêutica</h3>
                <p className="text-gray-700">Orientação personalizada sobre medicamentos e cuidados com sua saúde.</p>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="flex-1 bg-[#6A5AF9]/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-lg transition">
              <Heartbeat size={48} weight="bold" className="text-[#6A5AF9]"/>
              <div>
                <h3 className="text-xl font-semibold mb-2">Programas de Saúde</h3>
                <p className="text-gray-700">Acompanhamento de doenças crônicas e campanhas preventivas para você.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Depoimentos — estilo cartão diferente */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl shadow-lg bg-white border-l-4 border-[#6A5AF9] hover:shadow-xl transition">
              <p className="text-gray-600 italic mb-4">"Excelente atendimento e entrega rápida. Recomendo a Farm Villa para todos!"</p>
              <p className="font-semibold text-gray-800">— Ana Souza</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white border-l-4 border-[#BB2ED7] hover:shadow-xl transition">
              <p className="text-gray-600 italic mb-4">"Encontrei todos os produtos que precisava e com preços justos."</p>
              <p className="font-semibold text-gray-800">— Carlos Lima</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white border-l-4 border-[#6A5AF9] hover:shadow-xl transition">
              <p className="text-gray-600 italic mb-4">"Equipe muito atenciosa, atendimento impecável e entrega rápida."</p>
              <p className="font-semibold text-gray-800">— Fernanda Reis</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;