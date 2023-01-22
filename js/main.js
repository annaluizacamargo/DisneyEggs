const nomePersonagemInput = document.getElementById("input-personagem");
const btnBusca = document.getElementById("busca");
const containerAPI = document.querySelector(".api");
const nomePersonagem = document.getElementById("name-api");
const filmesPersonagem = document.getElementById("movies-api");
const imgPersonagem = document.getElementById("img-api");
let nomeTransformado = "";

nomePersonagemInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    transformaNomePersonagem();
    }
  });
btnBusca.addEventListener("click", transformaNomePersonagem);


//@ Função para transformar o nome do Personagem para API
async function transformaNomePersonagem() {
    filmesPersonagem.innerHTML = "";
    let nome = nomePersonagemInput.value.toLowerCase();

    nomeTransformado = nome
        .split(" ")
        .map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))
        .join(" ");
    
    await buscaPersonagemAPI();
    nomePersonagemInput.value = "";
}


//@ Capturando os dados da API da Disney e integrando ao DOM
async function buscaPersonagemAPI() {
    const consultaDadosPersonagem = await fetch(`https://api.disneyapi.dev/character?name=${nomeTransformado}`);
    const dadosConvertidos = await consultaDadosPersonagem.json();
    const arrayPersonagem = dadosConvertidos.data;
    const personagem = arrayPersonagem.find(indice => indice.name == nomeTransformado);

    exibeNome(personagem.name);
    exibeFilmes(personagem.films);
    exibeFotoPersonagem(personagem.imageUrl);
    containerAPI.style.display = "block";
}


//@ Função para exibir o nome do Personagem
function exibeNome(nome) {
    nomePersonagem.innerHTML = nome;
}


//@ Função para exibir a lista de filmes
function exibeFilmes(arrayFilmes) {
    arrayFilmes.map(filme => filmesPersonagem.innerHTML += `<li>${filme};</li><br>`);
}


//@ Função para exibir a foto do Personagem
function exibeFotoPersonagem(imagemPersonagem) {
    imgPersonagem.setAttribute("src", imagemPersonagem);
}
