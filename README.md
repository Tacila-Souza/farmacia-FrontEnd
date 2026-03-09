# 📦 Repositório - Gestão de Categorias

Este repositório contém o Front-end de uma aplicação web desenvolvida para o gerenciamento de categorias de produtos. O projeto foi construído com foco em uma interface de usuário limpa, responsiva e com feedback visual em tempo real, garantindo uma integração fluida com a API de back-end.

## 🚀 Funcionalidades

O sistema oferece um CRUD completo (Create, Read, Update, Delete) para a entidade **Categoria**, consumindo endpoints RESTful de forma assíncrona e segura:

* **Listagem Dinâmica:** Exibição de todas as categorias cadastradas em um grid responsivo que se adapta automaticamente a dispositivos móveis e desktops.
* **Cadastro e Edição:** Formulários unificados e inteligentes para a criação e atualização de categorias, reutilizando componentes para manter o código DRY (Don't Repeat Yourself).
* **Deleção Segura:** Tela de confirmação dedicada antes de apagar um registro, prevenindo exclusões acidentais por parte do usuário.

## 🎨 Identidade Visual e UI/UX

A interface foi inteiramente desenhada utilizando **Tailwind CSS**, abandonando o CSS tradicional em arquivos separados para adotar uma abordagem de *Utility-First*.

* **Paleta de Cores:** O design gravita em torno da cor primária **Rosa/Roxo vibrante (`#BB2ED7`)**, utilizada de forma estratégica em botões, bordas de destaque e tipografia para guiar a atenção do usuário aos elementos de ação principal.
* **Interatividade:** Foram implementados efeitos de transição suaves (`transition-colors`, `hover:shadow-xl`) nos cards e botões, criando uma sensação tátil e moderna ao navegar pela aplicação.
* **Minimalismo Funcional:** Seguindo as regras de negócio da API, campos obrigatórios no back-end (como a URL da foto) são processados e validados no formulário, mas intencionalmente ocultados na listagem de cards para manter a interface limpa e focada no nome da categoria.

## 🔗 Validação de Dados: O Campo "Foto"

Para garantir a integridade dos dados enviados ao back-end e evitar o erro `400 Bad Request`, o front-end conta com validação no momento do preenchimento. 

O campo **URL da Foto** é estritamente obrigatório. A interface instrui e valida se o usuário está inserindo um link estruturado corretamente, garantindo que o banco de dados armazene apenas URLs válidas. 
> 💡 *Dica de uso:* Durante o desenvolvimento e testes, o sistema sugere a utilização da ferramenta externa [picsum.photos](https://picsum.photos/) para a geração de links válidos de imagens aleatórias, facilitando a prototipagem.

## 🛠️ Tecnologias Utilizadas

* **React + Vite:** Para um ambiente de desenvolvimento ultrarrápido e build otimizado.
* **TypeScript:** Garantindo a tipagem estática dos modelos de dados (`Categoria`, `Produto`) e evitando erros em tempo de execução.
* **Tailwind CSS:** Para estilização rápida, responsiva e consistente.
* **React Router Dom:** Gerenciamento das rotas da aplicação (Navegação SPA).
* **Axios:** Cliente HTTP para a comunicação com a API RESTful.
* **React Spinners:** Fornecimento de feedback visual durante requisições assíncronas.

## ⚙️ Como Executar o Projeto Localmente

1. Clone este repositório.
2. Acesse a pasta do projeto no terminal.
3. Instale as dependências executando: `npm install`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Acesse o link fornecido no terminal (geralmente `http://localhost:5173`).
