import axios from "axios";

// Define o endereço base da API
const api = axios.create({
    baseURL: "https://crud-farmacia1.onrender.com"
})

//  GET - Busca dados
export const buscar = async (url: string, setDados: Function) => {

    const resposta = await api.get(url)

    setDados(resposta.data)
}

//  POST - Cadastrar
export const cadastrar = async (url: string, dados: object, setDados: Function) => {

    const resposta = await api.post(url, dados)

    setDados(resposta.data)
}

//  PUT - Atualiza 
export const atualizar = async (url: string, dados: object, setDados: Function) => {

    const resposta = await api.put(url, dados)

    setDados(resposta.data)
}

//  DELETE - Deleta dados
export const deletar = async (url: string) => {

    await api.delete(url)

}