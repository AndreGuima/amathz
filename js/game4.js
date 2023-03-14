var proximaPagina = localStorage.getItem("proximaPagina");
if (localStorage.getItem("proximaPagina") != "./nivel4.html") {
    window.location.href = "./index.html";
}
localStorage.setItem("proximaPagina", "./index.html");

var numeroGerado = 0;
var resposta = 0;


var lbOpt1 = document.querySelector("#opt1");
var lbOpt2 = document.querySelector("#opt2");
var lbOpt3 = document.querySelector("#opt3");
var lbPrimeiroNumero = document.querySelector(".primeiroNumero");
var lbSegundoNumero = document.querySelector(".segundoNumero");
var numerosPergunta = [];

function fazPergunta() {
    numerosPergunta = [];
    retornaNumero1a40();

    for (i = 0; i < 2; i++) {

        while (numerosPergunta.length < 2) {
            if (numerosPergunta.length == 1) {
                if ((numeroGerado <= numerosPergunta[0]) && (Number.isInteger(numerosPergunta[0] / numeroGerado))) {
                    numerosPergunta[i] = numeroGerado;
                    break;
                }
            } else if (numeroGerado >= 4) {
                numerosPergunta[i] = numeroGerado;
                retornaNumero1a40();
                break;
            }
            retornaNumero1a40();
        }
    }

    lbPrimeiroNumero.textContent = numerosPergunta[0];
    lbSegundoNumero.textContent = numerosPergunta[1];
    resposta = numerosPergunta[0] / numerosPergunta[1];

    montaOpcoesRespostaDivisao();
}

function retornaNumero1a40() {
    numeroGerado = Math.floor(Math.random() * 40) + 1;
}

function montaOpcoesRespostaDivisao() {

    var numerosResposta = [];
    var maiorNumero = Math.max(numerosPergunta[0], numerosPergunta[1]);
    retornaNumero1a40();

    for (i = 0; i < 2; i++) {
        while (numerosResposta.length < 2) {
            if ((resposta != numeroGerado) && (numeroGerado <= maiorNumero) && (!numerosResposta.includes(numeroGerado))) {
                numerosResposta[i] = numeroGerado;
                retornaNumero1a40();
                break;
            } else {
                retornaNumero1a40();
            }
        }
    }


    numerosResposta[2] = resposta;
    numerosResposta.sort();

    lbOpt1.textContent = numerosResposta[0];
    lbOpt2.textContent = numerosResposta[1];
    lbOpt3.textContent = numerosResposta[2];
}