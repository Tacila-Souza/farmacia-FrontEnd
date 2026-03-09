import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">

      {/* Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link 
          to="/home" 
          className="text-2xl font-bold text-gray-800"
        >
          Farm Villa
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-lg text-gray-700">

          <Link 
            to="/categorias" 
            className="hover:text-gray-900 transition-colors"
          >
            Lista Categorias
          </Link>

          <Link 
            to="/cadastrarCategoria" 
            className="hover:text-gray-900 transition-colors"
          >
            Cadastrar Categoria
          </Link>

        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lg bg-white shadow-md border-t">

          <Link 
            to="/categorias"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Lista Categorias
          </Link>

          <Link 
            to="/cadastrarCategoria"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Cadastrar Categoria
          </Link>

        </div>
      )}

    </header>
  );
}

export default Navbar;