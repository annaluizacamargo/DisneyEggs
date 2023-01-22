//COLOCAR BARREIRA PARA PESQUISA SEM RETORNO

const nomePersonagemInput = document.getElementById("input-personagem");
const btnBusca = document.getElementById("busca");
let nomeTransformado = "";

btnBusca.addEventListener("click", transformaNomePersonagem);

async function transformaNomePersonagem() {
    filmesPersonagem.innerHTML = "";
    const xpto = nomeTransformado || "oi";
    console.log("xpto", xpto);

    let nome = nomePersonagemInput.value.toLowerCase();

    nomeTransformado = nome
        .split(" ")
        .map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))
        .join(" ");
    
    await buscaPersonagemAPI();
}


//@ Capturando os dados da API da Disney e integrando ao DOM
async function buscaPersonagemAPI() {
    const consultaDadosPersonagem = await fetch(`https://api.disneyapi.dev/character?name=${nomeTransformado}`);
    const dadosConvertidos = await consultaDadosPersonagem.json();
    //console.log(dadosConvertidos)
    const arrayPersonagem = dadosConvertidos.data;
}

const nomePersonagem = document.getElementById("name-api")
const filmesPersonagem = document.getElementById("movies-api")
const imgPersonagem = document.getElementById("img-api")

function exibeFilmes(arrayFilmes){
    arrayFilmes.map((filme)=> {
        filmesPersonagem.innerHTML += `<li>${filme};</li>`
    })
}
