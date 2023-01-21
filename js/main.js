const nomePersonagemInput = document.getElementById("input-personagem");
const btnBusca = document.getElementById("busca");
let nomeTransformado = "";

btnBusca.addEventListener("click", transformaNomePersonagem);

function transformaNomePersonagem() {
    let nome = nomePersonagemInput.value.toLowerCase();

    nomeTransformado = nome
        .split(" ")
        .map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))
        .join(" ");
}
