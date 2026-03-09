import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);
        try {
            await deletar(`/categorias/${id}`);
            alert('Categoria apagada com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Erro ao apagar categoria.');
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center gap-6 border border-gray-100">
                
                <h1 className="text-3xl font-extrabold text-gray-800 border-b-4 border-red-500 pb-2">
                    Apagar Categoria
                </h1>

                <p className="text-lg text-gray-700 text-center">
                    Tem certeza de que deseja apagar a categoria abaixo? Esta ação não poderá ser desfeita.
                </p>

                <div className="bg-gray-100 p-4 rounded-xl w-full text-center">
                    <span className="text-2xl font-bold text-[#BB2ED7]">
                        {categoria.nome}
                    </span>
                </div>

                <div className="flex w-full gap-4 mt-2">
                    <button
                        onClick={retornar}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-colors duration-300"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={deletarCategoria}
                        disabled={isLoading}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg flex justify-center items-center transition-colors duration-300 disabled:opacity-70"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            "Apagar"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;