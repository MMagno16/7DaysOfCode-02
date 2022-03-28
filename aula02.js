// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

//"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

//Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?


let nome = prompt("Qual seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagem = prompt("Qual linguagem de programação você está estudando?")
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)


let gostaJS = parseInt(prompt("Você gosta de estudar JS? 1 - SIM 2 - NÃO"))

if (gostaJS == 1) {
    let imagemMoana = document.createElement("img");
    imagemMoana.src = "./moana.png";
    imagemMoana.style.width = "550px";
    imagemMoana.style.height = "400px";
    let texto = document.createElement("h2");
    texto.innerHTML = " Muito bom! Continue estudando e você terá muito sucesso."

    document.getElementById("container").appendChild(imagemMoana)
    document.getElementById("text").appendChild(texto)
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}


