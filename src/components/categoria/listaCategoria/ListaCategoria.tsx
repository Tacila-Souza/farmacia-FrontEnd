import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardCategoria/CardCategoria";

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias);
        } catch (error) {
            console.log("Erro ao buscar categorias:", error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center w-full">
            <div className="container max-w-7xl flex flex-col items-center">
                
                {/* Título da Seção */}
                <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center border-b-4 border-[#BB2ED7] pb-2 inline-block">
                    Categorias
                </h1>

                {/* Feedback visual ou Grid de Cards */}
                {categorias.length === 0 ? (
                    <div className="text-gray-500 text-lg animate-pulse mt-10">
                        Carregando categorias...
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                        {categorias.map((categoria) => (
                            <CardCategoria
                                key={categoria.id}
                                categoria={categoria}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListaCategoria;