const produtos = [
{
nome: "Combo Basic",
preco: 20.00,
imagem: "images/combobasic.jpg",
descricao: "Composto por todos os trios. Exemplo: Trio trident, cesta, etc.",
categoria: "Combos"
},

{
    nome: "Combo Verão",
    preco: 30.00,
    imagem: "images/comboverao.jpg",
    descricao: "Composto por todos os sets de verão.",
    categoria: "Combos"
},

{
    nome: "Combo Inverno",
    preco: 114.00,
    imagem: "images/comboinverno.jpg",
    descricao: "Composto por todos os sets de inverno.",
    categoria: "Combos"
},

{
    nome: "Combo Outono",
    preco: 5.25,
    imagem: "images/combooutono.jpg",
    descricao: "Composto por todos os sets de outono.",
    categoria: "Combos"
},

{
    nome: "Combo Primavera",
    preco: 30.00,
    imagem: "images/comboprimavera.jpg",
    descricao: "Composto por todos os sets de primavera.",
    categoria: "Combos"
},

{
    nome: "Combo De 125 Sets",
    preco: 20.00,
    imagem: "images/combo125.jpg",
    descricao: "Composto por 125 sets aleatórios.",
    categoria: "Combos"
},

{
    nome: "X-all completo",
    preco: 150.00,
    imagem: "images/xallcompleto.jpg",
    descricao: "Composto por todos os sets do jogo.",
    categoria: "X-alls"
},

{
    nome: "X-all lendário",
    preco: 140.00,
    imagem: "images/xalllendario.jpg",
    descricao: "Composto por todos os sets lendários.",
    categoria: "X-alls"
},

{
    nome: "X-all sazonal",
    preco: 30.00,
    imagem: "images/xallsazonal.jpg",
    descricao: "Composto por todos os sets comuns, raros e épicos.",
    categoria: "X-alls"
}

];

const container =
document.getElementById("products");

/* =========================
NEVE
========================= */

function criarNeve() {

const snow =
    document.getElementById("snow");

if (!snow) {
    return;
}

for (let i = 0; i < 80; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add(
        "snow-particle"
    );

    particle.style.left =
        Math.random() * 100 + "%";

    const tamanho =
        Math.random() * 4 + 2;

    particle.style.width =
        tamanho + "px";

    particle.style.height =
        tamanho + "px";

    particle.style.opacity =
        Math.random() * 0.6 + 0.3;

    const duracao =
        Math.random() * 8 + 5;

    particle.style.animationDuration =
        duracao + "s";

    particle.style.animationDelay =
        -(Math.random() * duracao) + "s";

    snow.appendChild(
        particle
    );
}

}

criarNeve();

/* =========================
ESTRELAS
========================= */

function criarEstrelas() {

const stars =
    document.getElementById("stars");

if (!stars) {
    return;
}

for (let i = 0; i < 45; i++) {

    const estrela =
        document.createElement("div");

    estrela.classList.add(
        "star-particle"
    );

    estrela.style.left =
        Math.random() * 100 + "%";

    estrela.style.top =
        Math.random() * 100 + "%";

    const tamanho =
        Math.random() * 2 + 1;

    estrela.style.width =
        tamanho + "px";

    estrela.style.height =
        tamanho + "px";

    estrela.style.opacity =
        Math.random() * 0.7 + 0.2;

    estrela.style.animationDuration =
        (Math.random() * 2 + 1.5) + "s";

    estrela.style.animationDelay =
        -(Math.random() * 3) + "s";

    stars.appendChild(
        estrela
    );
}

}

criarEstrelas();

/* =========================
ORDENAÇÃO
========================= */

let categoriaAtual =
"Combos";

let ordemAtual =
"padrao";

function ordenarProdutos(ordem) {

ordemAtual =
    ordem;

mostrarProdutos(
    categoriaAtual
);

}

/* =========================
PRODUTOS
========================= */

function mostrarProdutos(categoria) {

if (!container) {
    return;
}

categoriaAtual =
    categoria;

container.innerHTML = "";

let produtosFiltrados =
    produtos.filter(
        produto =>
            produto.categoria === categoria
    );


if (
    ordemAtual ===
    "menor-preco"
) {

    produtosFiltrados.sort(
        (a, b) =>
            a.preco - b.preco
    );
}


if (
    ordemAtual ===
    "maior-preco"
) {

    produtosFiltrados.sort(
        (a, b) =>
            b.preco - a.preco
    );
}


if (
    ordemAtual ===
    "a-z"
) {

    produtosFiltrados.sort(
        (a, b) =>
            a.nome.localeCompare(
                b.nome
            )
    );
}


if (
    ordemAtual ===
    "z-a"
) {

    produtosFiltrados.sort(
        (a, b) =>
            b.nome.localeCompare(
                a.nome
            )
    );
}


produtosFiltrados.forEach(
    produto => {

        const originalIndex =
            produtos.indexOf(
                produto
            );

        const card =
            document.createElement(
                "div"
            );

        card.classList.add(
            "product-card"
        );

        card.innerHTML = `
            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="product-info">

                <h3>
                    ${produto.nome}
                </h3>

                <p class="product-description">
                    ${produto.descricao}
                </p>

                <p class="product-price">
                    R$ ${produto.preco
                        .toFixed(2)
                        .replace(".", ",")}
                </p>

                <button
                    class="product-button"
                    onclick="adicionarCarrinho(${originalIndex})"
                >
                    <i class="fa-solid fa-cart-plus"></i>
                    Adicionar ao carrinho
                </button>

            </div>
        `;

        container.appendChild(
            card
        );
    }
);

}

/* =========================
CATEGORIAS
========================= */

function selecionarCategoria(
categoria,
botao
) {

document
    .querySelectorAll(
        ".category-button"
    )
    .forEach(
        elemento => {

            elemento.classList.remove(
                "active"
            );

        }
    );

botao.classList.add(
    "active"
);

mostrarProdutos(
    categoria
);

}

/* =========================
MOSTRAR COMBOS
========================= */

mostrarProdutos(
"Combos"
);

/* =========================
MODAL DE COMPRA
========================= */

function abrirCompra(
nomeProduto
) {

const modal =
    document.getElementById(
        "modal-compra"
    );

if (!modal) {
    return;
}

const nome =
    document.getElementById(
        "nome-produto-compra"
    );

if (nome) {
    nome.textContent =
        nomeProduto;
}

modal.classList.add(
    "mostrar"
);

document.body.classList.add(
    "modal-aberto"
);

}

function fecharCompra() {

const modal =
    document.getElementById(
        "modal-compra"
    );

if (!modal) {
    return;
}

modal.classList.remove(
    "mostrar"
);

document.body.classList.remove(
    "modal-aberto"
);

}

/* =========================
CARRINHO
========================= */

let carrinho = [];

/* =========================
ADICIONAR
========================= */

function adicionarCarrinho(
index
) {

const produto =
    produtos[index];

if (!produto) {
    return;
}

const itemExistente =
    carrinho.find(
        item =>
            item.nome === produto.nome
    );

if (itemExistente) {

    itemExistente.quantidade++;

} else {

    carrinho.push({
        ...produto,
        quantidade: 1
    });

}

atualizarCarrinho();

mostrarAvisoCarrinho();

}

/* =========================
REMOVER
========================= */

function removerCarrinho(
index
) {

carrinho.splice(
    index,
    1
);

atualizarCarrinho();

}

/* =========================
DIMINUIR
========================= */

function diminuirQuantidade(
index
) {

if (!carrinho[index]) {
    return;
}

if (
    carrinho[index].quantidade > 1
) {

    carrinho[index].quantidade--;

} else {

    carrinho.splice(
        index,
        1
    );

}

atualizarCarrinho();

}

/* =========================
AUMENTAR
========================= */

function aumentarQuantidade(
index
) {

if (!carrinho[index]) {
    return;
}

carrinho[index].quantidade++;

atualizarCarrinho();

}

/* =========================
LIMPAR CARRINHO
========================= */

function limparCarrinho() {

if (
    carrinho.length === 0
) {
    return;
}

carrinho = [];

atualizarCarrinho();

}

/* =========================
ATUALIZAR CARRINHO
========================= */

function atualizarCarrinho() {

const contador =
    document.getElementById(
        "cart-count"
    );

const quantidadeTotal =
    carrinho.reduce(
        (total, item) =>
            total + item.quantidade,
        0
    );

if (contador) {

    contador.textContent =
        quantidadeTotal;
}

mostrarCarrinho();

}

/* =========================
MOSTRAR CARRINHO
========================= */

function mostrarCarrinho() {

const lista =
    document.getElementById(
        "cart-items"
    );

const totalElement =
    document.getElementById(
        "cart-total"
    );

if (
    !lista ||
    !totalElement
) {
    return;
}


if (
    carrinho.length === 0
) {

    lista.innerHTML = `
        <div class="carrinho-vazio">

            <i class="fa-solid fa-cart-shopping"></i>

            <p>
                Seu carrinho está vazio.
            </p>

        </div>
    `;

    totalElement.textContent =
        "R$ 0,00";

    return;
}


lista.innerHTML = "";


carrinho.forEach(
    (produto, index) => {

        const item =
            document.createElement(
                "div"
            );

        item.classList.add(
            "cart-item"
        );

        item.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="cart-item-info">

                <h3>
                    ${produto.nome}
                </h3>

                <p>
                    R$ ${produto.preco
                        .toFixed(2)
                        .replace(".", ",")}
                </p>

                <div class="quantity">

                    <button
                        onclick="diminuirQuantidade(${index})"
                    >
                        −
                    </button>

                    <span>
                        ${produto.quantidade}
                    </span>

                    <button
                        onclick="aumentarQuantidade(${index})"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                onclick="removerCarrinho(${index})"
            >
                <i class="fa-solid fa-trash"></i>
            </button>

        `;

        lista.appendChild(
            item
        );
    }
);


const total =
    carrinho.reduce(
        (soma, item) =>
            soma +
            (
                item.preco *
                item.quantidade
            ),
        0
    );

totalElement.textContent =
    `R$ ${total
        .toFixed(2)
        .replace(".", ",")}`;

}

/* =========================
ABRIR CARRINHO
========================= */

function abrirCarrinho() {

const painel =
    document.getElementById(
        "cart-panel"
    );

const overlay =
    document.getElementById(
        "cart-overlay"
    );

if (
    !painel ||
    !overlay
) {
    return;
}

painel.classList.add(
    "aberto"
);

overlay.classList.add(
    "mostrar"
);

document.body.classList.add(
    "modal-aberto"
);

mostrarCarrinho();

}

/* =========================
FECHAR CARRINHO
========================= */

function fecharCarrinho() {

const painel =
    document.getElementById(
        "cart-panel"
    );

const overlay =
    document.getElementById(
        "cart-overlay"
    );

if (
    !painel ||
    !overlay
) {
    return;
}

painel.classList.remove(
    "aberto"
);

overlay.classList.remove(
    "mostrar"
);

document.body.classList.remove(
    "modal-aberto"
);

}

/* =========================
WHATSAPP
========================= */

function atualizarLinkWhatsApp() {

const whatsapp =
    document.getElementById(
        "whatsapp-link"
    );

if (!whatsapp) {
    return;
}

const numero =
    "558688559115";

let mensagem = "";


if (
    carrinho.length === 1
) {

    const produto =
        carrinho[0];

    const valor =
        produto.preco
            .toFixed(2)
            .replace(".", ",");

    const quantidade =
        produto.quantidade;

    const unidade =
        quantidade === 1
            ? "unidade"
            : "unidades";

    const cada =
        quantidade > 1
            ? " cada"
            : "";

    mensagem =
        `Olá, quero comprar este item:\n` +
        `${produto.nome} (${quantidade} ${unidade}) - R$ ${valor}${cada}`;

} else if (
    carrinho.length > 1
) {

    mensagem =
        "Olá, quero comprar os seguintes itens:\n";

    carrinho.forEach(
        produto => {

            const valor =
                produto.preco
                    .toFixed(2)
                    .replace(".", ",");

            const quantidade =
                produto.quantidade;

            const unidade =
                quantidade === 1
                    ? "unidade"
                    : "unidades";

            const cada =
                quantidade > 1
                    ? " cada"
                    : "";

            mensagem +=
                `${produto.nome} (${quantidade} ${unidade}) - R$ ${valor}${cada}\n`;
        }
    );

    const total =
        carrinho.reduce(
            (soma, produto) =>
                soma +
                (
                    produto.preco *
                    produto.quantidade
                ),
            0
        );

    mensagem +=
        `Total: R$ ${total
            .toFixed(2)
            .replace(".", ",")}`;
}


const link =
    `https://wa.me/${numero}?text=` +
    encodeURIComponent(
        mensagem
    );

whatsapp.href =
    link;

}

/* =========================
COMPRAR CARRINHO
========================= */

function comprarCarrinho() {

if (
    carrinho.length === 0
) {
    return;
}

fecharCarrinho();

const modal =
    document.getElementById(
        "modal-compra"
    );

if (!modal) {
    return;
}

const quantidadeTotal =
    carrinho.reduce(
        (total, item) =>
            total + item.quantidade,
        0
    );

const nome =
    document.getElementById(
        "nome-produto-compra"
    );

if (nome) {

    nome.textContent =
        `${quantidadeTotal} item(ns) no carrinho`;
}

atualizarLinkWhatsApp();

modal.classList.add(
    "mostrar"
);

document.body.classList.add(
    "modal-aberto"
);

}

/* =========================
AVISO DE ITEM ADICIONADO
========================= */

let avisoTimer = null;

function mostrarAvisoCarrinho() {

const aviso =
    document.getElementById(
        "cart-toast"
    );

if (!aviso) {
    return;
}

clearTimeout(
    avisoTimer
);

aviso.classList.add(
    "mostrar"
);

avisoTimer =
    setTimeout(
        () => {

            aviso.classList.remove(
                "mostrar"
            );

        },
        2000
    );

}

/* =========================
DISCORD
========================= */

document.addEventListener(
"DOMContentLoaded",
function () {

    const discordButton =
        document.getElementById(
            "discord-button"
        );

    const discordToast =
        document.getElementById(
            "discord-toast"
        );

    if (
        discordButton &&
        discordToast
    ) {

        discordButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                discordToast.classList.add(
                    "mostrar"
                );

                setTimeout(
                    function () {

                        discordToast.classList.remove(
                            "mostrar"
                        );

                    },
                    3000
                );

            }
        );
    }
}

);

/* =========================
TELA DE CARREGAMENTO
========================= */

let scrollBloqueado =
false;

function bloquearScroll(
event
) {

event.preventDefault();

}

window.addEventListener(
"load",
function () {

    const loadingScreen =
        document.getElementById(
            "loading-screen"
        );

    if (!loadingScreen) {
        return;
    }

    scrollBloqueado =
        true;

    document.body.classList.add(
        "loading"
    );

    window.addEventListener(
        "touchmove",
        bloquearScroll,
        {
            passive: false
        }
    );

    window.addEventListener(
        "wheel",
        bloquearScroll,
        {
            passive: false
        }
    );

    setTimeout(
        function () {

            loadingScreen.classList.add(
                "esconder"
            );

            document.body.classList.remove(
                "loading"
            );

            window.removeEventListener(
                "touchmove",
                bloquearScroll
            );

            window.removeEventListener(
                "wheel",
                bloquearScroll
            );

            scrollBloqueado =
                false;

        },
        1500
    );
}

);

/* =========================
ASSISTENTE MOONLIT
========================= */

function abrirAssistente() {

const overlay =
    document.getElementById(
        "assistente-overlay"
    );

if (!overlay) {
    return;
}

overlay.classList.add(
    "aberto"
);

document.body.classList.add(
    "modal-aberto"
);

setTimeout(
    () => {

        const input =
            document.getElementById(
                "assistente-input"
            );

        if (input) {
            input.focus();
        }

    },
    200
);

}

function fecharAssistente() {

const overlay =
    document.getElementById(
        "assistente-overlay"
    );

if (!overlay) {
    return;
}

overlay.classList.remove(
    "aberto"
);

document.body.classList.remove(
    "modal-aberto"
);

}

/* =========================
ENVIAR MENSAGEM
========================= */

async function enviarMensagemAssistente() {

const input =
    document.getElementById(
        "assistente-input"
    );

const mensagens =
    document.getElementById(
        "assistente-mensagens"
    );

if (
    !input ||
    !mensagens
) {
    return;
}

const mensagem =
    input.value.trim();

if (!mensagem) {
    return;
}


const mensagemUsuario =
    document.createElement(
        "div"
    );

mensagemUsuario.className =
    "mensagem usuario-msg";

mensagemUsuario.textContent =
    mensagem;

mensagens.appendChild(
    mensagemUsuario
);

input.value = "";

mensagens.scrollTop =
    mensagens.scrollHeight;


const carregando =
    document.createElement(
        "div"
    );

carregando.className =
    "mensagem assistente-msg pensando";

carregando.textContent =
    "Pensando...";

mensagens.appendChild(
    carregando
);

mensagens.scrollTop =
    mensagens.scrollHeight;


try {

    const resposta =
        await fetch(
            "https://moonlit-store.onrender.com/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    mensagem:
                        mensagem
                })
            }
        );


    const dados =
        await resposta.json();


    carregando.remove();


    if (!resposta.ok) {

        const mensagemErro =
            document.createElement(
                "div"
            );

        mensagemErro.className =
            "mensagem assistente-msg";

        mensagemErro.textContent =
            dados.erro ||
            "O servidor encontrou um erro.";

        mensagens.appendChild(
            mensagemErro
        );

        mensagens.scrollTop =
            mensagens.scrollHeight;

        return;
    }


    const texto =
        dados.resposta;


    if (!texto) {

        const mensagemErro =
            document.createElement(
                "div"
            );

        mensagemErro.className =
            "mensagem assistente-msg";

        mensagemErro.textContent =
            "O Gemini não retornou nenhum texto. 😔";

        mensagens.appendChild(
            mensagemErro
        );

        return;
    }


    const mensagemIA =
        document.createElement(
            "div"
        );

    mensagemIA.className =
        "mensagem assistente-msg";

    mensagens.appendChild(
        mensagemIA
    );


    let indice = 0;


    function digitar() {

        mensagemIA.textContent =
            texto.slice(
                0,
                indice
            );

        indice++;

        mensagens.scrollTop =
            mensagens.scrollHeight;


        if (
            indice <= texto.length
        ) {

            setTimeout(
                digitar,
                12
            );
        }
    }

    digitar();


} catch (erro) {

    console.error(
        "Erro no Assistente Moonlit:",
        erro
    );

    carregando.remove();


    const mensagemErro =
        document.createElement(
            "div"
        );

    mensagemErro.className =
        "mensagem assistente-msg";

    mensagemErro.textContent =
        "Não consegui falar com o servidor agora. 😔";

    mensagens.appendChild(
        mensagemErro
    );

    mensagens.scrollTop =
        mensagens.scrollHeight;
}

}

/* =========================
ENTER PARA ENVIAR
========================= */

document.addEventListener(
"DOMContentLoaded",
function () {

    const input =
        document.getElementById(
            "assistente-input"
        );

    if (!input) {
        return;
    }

    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                enviarMensagemAssistente();
            }
        }
    );
}

);
