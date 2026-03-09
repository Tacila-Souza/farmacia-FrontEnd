import axios from "axios";

// Define o endereço base da API
const api = axios.create({
    baseURL: "https://crud-farmacia1.onrender.com"
})

//  GET - Busca dados
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const buscar = async (url: string, setDados: Function) => {

    const resposta = await api.get(url)

    setDados(resposta.data)
}

//  POST - Cadastrar
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const cadastrar = async (url: string, dados: object, setDados: Function) => {

    const resposta = await api.post(url, dados)

    setDados(resposta.data)
}

//  PUT - Atualiza 
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const atualizar = async (url: string, dados: object, setDados: Function) => {

    const resposta = await api.put(url, dados)

    setDados(resposta.data)
}

//  DELETE - Deleta dados
export const deletar = async (url: string) => {

    await api.delete(url)

}