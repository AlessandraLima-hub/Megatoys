# 🧸 MegaToys — Projeto Integrador React

A **MegaToys** é uma loja virtual fictícia de brinquedos desenvolvida como Projeto Integrador de Frontend.

O projeto foi criado com **React** e tem como objetivo aplicar na prática conceitos como componentização, navegação SPA, gerenciamento de estado, efeitos, persistência de dados e responsividade.

> A MegaToys é um projeto exclusivamente acadêmico e não representa uma empresa ou comércio real.

## 🚀 Funcionalidades

- Catálogo com 120 produtos demonstrativos
- 6 categorias de brinquedos
- Busca de produtos por nome ou categoria
- Filtro por categorias
- Página de novidades
- Página de ofertas
- Paginação do catálogo
- Carrinho de compras
- Adição e remoção de produtos
- Alteração da quantidade de itens no carrinho
- Cálculo de subtotal, frete e total
- Persistência do carrinho com `localStorage`
- Simulação de finalização de compra
- Banner rotativo
- Página 404 para rotas inexistentes
- Layout responsivo para desktop, tablet e celular
- Menu responsivo para dispositivos móveis

## 🧩 Categorias

O catálogo está dividido nas seguintes categorias:

- 🤖 Bonecos
- 🧱 Blocos de Montar
- 🏎️ Carrinhos
- 🎲 Jogos de Tabuleiro
- 🧸 Pelúcias
- 🧠 Educativos

## 💻 Tecnologias utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- Context API
- HTML5
- CSS3
- JSON
- localStorage

## ⚛️ Conceitos de React utilizados

O projeto utiliza conceitos importantes do React, como:

- Componentes funcionais
- Props
- `useState`
- `useEffect`
- `useMemo`
- `useContext`
- Context API
- Renderização condicional
- Renderização de listas
- Eventos
- Componentização e reutilização de componentes

## 🧭 Rotas

O projeto utiliza o **React Router DOM** para navegação SPA.

| Rota | Página |
|---|---|
| `/` | Início |
| `/loja` | Loja |
| `/novidades` | Novidades |
| `/ofertas` | Ofertas |
| `/sobre` | Sobre |
| `*` | Página 404 |

## 🛒 Carrinho

O carrinho é controlado globalmente através do `CartContext`.

Entre suas funcionalidades estão:

- Adicionar produtos
- Aumentar quantidade
- Diminuir quantidade
- Excluir produtos
- Limpar o carrinho
- Calcular subtotal
- Calcular frete
- Calcular valor total
- Persistir os produtos no navegador com `localStorage`

## 📁 Estrutura principal

```text
src/
├── components/
│   ├── Banner.jsx
│   ├── Cart.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── ProductGrid.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   ├── catalogo.js
│   └── produtos.json
│
├── pages/
│   ├── Home.jsx
│   ├── Loja.jsx
│   ├── NotFound.jsx
│   ├── Novidades.jsx
│   ├── Ofertas.jsx
│   └── Sobre.jsx
│
├── services/
│   └── produtosService.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## ▶️ Como executar o projeto

### 1. Instale as dependências

```bash
npm install
```

No Windows PowerShell, caso a execução de `npm` esteja bloqueada, pode ser utilizado:

```bash
npm.cmd install
```

### 2. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Ou, no PowerShell:

```bash
npm.cmd run dev
```

O Vite exibirá no terminal o endereço local para acessar o projeto pelo navegador.

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela:

- Desktop
- Tablet
- Smartphone

Em dispositivos móveis, a navegação utiliza um menu responsivo e os elementos do catálogo são reorganizados para facilitar a visualização.

## 📚 Objetivo acadêmico

Este projeto foi desenvolvido para demonstrar conhecimentos de desenvolvimento Frontend utilizando React.

A MegaToys, seus produtos e os dados comerciais apresentados são **fictícios e utilizados exclusivamente para fins acadêmicos e demonstrativos**.