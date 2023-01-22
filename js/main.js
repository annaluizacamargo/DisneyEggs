//COLOCAR BARREIRA PARA PESQUISA SEM RETORNO

const nomePersonagemInput = document.getElementById("input-personagem");
const btnBusca = document.getElementById("busca");
let nomeTransformado = "";

nomePersonagemInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    transformaNomePersonagem();
    }
  });
btnBusca.addEventListener("click", transformaNomePersonagem);

async function transformaNomePersonagem() {
    filmesPersonagem.innerHTML = "";
    let nome = nomePersonagemInput.value.toLowerCase();

    nomeTransformado = nome
        .split(" ")
        .map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))
        .join(" ");
    
    await buscaImagemNASA();
    nomePersonagemInput.value = "";    
}

//IGNORAR ESPAÇOS APÓS NOME PERSONAGEM
//@ Capturando os dados da API da Disney e integrando ao DOM
async function buscaImagemNASA() {
    const consultaDadosPersonagem = await fetch(`https://api.disneyapi.dev/character?name=${nomeTransformado}`);
    const dadosConvertidos = await consultaDadosPersonagem.json();
    const arrayPersonagem = dadosConvertidos.data
    console.log(arrayPersonagem)

    const personagem = arrayPersonagem.find((i) => {
        return (i.name == nomeTransformado)
    })
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
