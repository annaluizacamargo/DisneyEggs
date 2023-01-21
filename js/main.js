const nomePersonagemInput = document.getElementById("input-personagem");
const btnBusca = document.getElementById("busca");
let nomeTransformado = "";

btnBusca.addEventListener("click", transformaNomePersonagem);

function transformaNomePersonagem() {
    let nome = nomePersonagemInput.value.toLowerCase();
}
