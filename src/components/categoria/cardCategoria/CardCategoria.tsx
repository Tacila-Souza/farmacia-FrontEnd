import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden group">
            {/* Área de Informação */}
            <div className="p-6 flex-grow flex items-center justify-center min-h-[120px]">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#BB2ED7] transition-colors duration-300 text-center">
                    {categoria.nome}
                </h2>
                {/* O campo foto e produto existem no objeto, mas propositalmente não são exibidos aqui */}
            </div>
            
            {/* Área dos Botões */}
            <div className="flex divide-x border-t border-gray-200 bg-gray-50">
                <Link
                    to={`/editarCategoria/${categoria.id}`}
                    className="flex-1 py-3 text-center text-sm font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                    Editar
                </Link>
                <Link
                    to={`/deletarCategoria/${categoria.id}`}
                    className="flex-1 py-3 text-center text-sm font-bold text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardCategoria;