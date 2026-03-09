import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service"; // Adicionei as importações para a Service

function FormCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); // Pega o ID da rota caso seja uma edição

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        foto: '',
        produto: []
    } as unknown as Categoria);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Busca os dados da categoria se for edição
    useEffect(() => {
        if (id !== undefined) {
            buscar(`/categorias/${id}`, setCategoria);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar('/categorias', categoria, setCategoria);
                alert('Categoria atualizada com sucesso!');
            } else {
                await cadastrar('/categorias', categoria, setCategoria);
                alert('Categoria cadastrada com sucesso!');
            }
            retornar();
        } catch (error) {
            console.error("Erro ao processar categoria:", error);
            alert("Erro ao processar a requisição.");
        }

        setIsLoading(false);
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-100 flex flex-col items-center">
                
                <h1 className="text-3xl font-extrabold text-gray-800 mb-8 border-b-4 border-[#BB2ED7] pb-2 text-center">
                    {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
                </h1>

                <form className="flex flex-col gap-6 w-full" onSubmit={gerarNovoCategoria}>
                    {/* Campo Nome */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-gray-700 font-bold text-sm">
                            Nome da Categoria
                        </label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Ex: Roupas, Eletrônicos..."
                            className="border-2 border-gray-200 focus:border-[#BB2ED7] rounded-lg p-3 outline-none transition-colors duration-300"
                            value={categoria.nome || ''}
                            onChange={atualizarEstado}
                            required
                        />
                    </div>

                    {/* Campo Foto (Obrigatório, substituindo descrição) */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="foto" className="text-gray-700 font-bold text-sm">
                            URL da Foto
                        </label>
                        <input
                            type="text"
                            name="foto"
                            id="foto"
                            placeholder="insira o link de uma imagem válida"
                            className="border-2 border-gray-200 focus:border-[#BB2ED7] rounded-lg p-3 outline-none transition-colors duration-300"
                            value={categoria.foto || ''}
                            onChange={atualizarEstado}
                            required
                        />
                    </div>
                    
                    <div className="text-gray-500">
                        use o <a className="text-red-600" href="https://picsum.photos/" target="_blank" rel="noopener noreferrer">picsum.photos</a> para gerar links validos de imagens
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 bg-[#BB2ED7] hover:bg-[#a123bc] text-white font-bold py-3 rounded-lg w-full flex justify-center transition-colors duration-300 disabled:opacity-70"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            id !== undefined ? "ATUALIZAR" : "CADASTRAR"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormCategoria;