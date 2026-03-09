import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deleteCategoria/DeleteCategoria";
import FormCategoria from "./components/categoria/formCategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {

  return (
    <>
    <div className="bg-white minh-h screen">
    <BrowserRouter>
    <Navbar />
    <div className="min-h-[90vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListaCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </div>
     </>
  )
}

export default App
