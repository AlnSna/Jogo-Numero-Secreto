//Linhas substituidas por uma função.
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let numeroFinal = 10;
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = `Insira um numero de 1 a ${numeroFinal}`;

let listaDeNumerosSorteados = [];
let numeroFinal = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroFinal + 1);
    let quantidadeNumerosLista = listaDeNumerosSorteados.length;

    if (quantidadeNumerosLista == numeroFinal) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        console.log (quantidadeNumerosLista);
        return numeroEscolhido;
    }
    
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTexto("h1", "Jogo do número secreto");
    exibirTexto("p", `Insira um numero de 1 a ${numeroFinal}`);
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTexto("h1", "Parabéns!");
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (chute > numeroSecreto) {
            exibirTexto("h1", "Tente novamente!");
            exibirTexto("p", `O número secreto é menor que ${chute}`);  
        }
        else {
            exibirTexto("h1", "Tente novamente!");
            exibirTexto("p", `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

mensagemInicial();
//console.log (listaDeNumerosSorteados);





