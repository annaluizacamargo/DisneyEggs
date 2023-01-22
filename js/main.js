//COLOCAR BARREIRA PARA PESQUISA SEM RETORNO

const nomePersonagemInput = document.getElementById("input-personagem");
const btnBusca = document.getElementById("busca");
let nomeTransformado = "";

btnBusca.addEventListener("click", transformaNomePersonagem);

async function transformaNomePersonagem() {
    filmesPersonagem.innerHTML = ""
    const xpto = nomeTransformado || "oi"
    console.log("xpto", xpto)

    let nome = nomePersonagemInput.value.toLowerCase();

    nomeTransformado = nome
        .split(" ")
        .map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))
        .join(" ");
    
    await buscaImagemNASA();
}


//@ Capturando os dados da API da Disney e integrando ao DOM
async function buscaImagemNASA() {
    const consultaDadosPersonagem = await fetch(`https://api.disneyapi.dev/character?name=${nomeTransformado}`);
    const dadosConvertidos = await consultaDadosPersonagem.json();
    const arrayPersonagem = dadosConvertidos.data

    const personagem = arrayPersonagem.find((i) => {
        return (i.name == nomeTransformado)
    })
    console.log(personagem)
    const arrayFilmes = personagem.films
    const imgPersonagem = personagem.imageUrl

    exibeNome(personagem.name)
    exibeFilmes(arrayFilmes);
    exibeFotoPersonagem(imgPersonagem);
}

const nomePersonagem = document.getElementById("name-api");
const filmesPersonagem = document.getElementById("movies-api");
const imgPersonagem = document.getElementById("img-api");

function exibeNome(nome) {
    nomePersonagem.innerHTML = nome;
}

function exibeFilmes(arrayFilmes) {
    arrayFilmes.map((filme)=> {
        filmesPersonagem.innerHTML += `<li>${filme};</li>`;
    })
}

function exibeFotoPersonagem(imagemPersonagem) {
    imgPersonagem.setAttribute("src", imagemPersonagem);
}
