var proximaPagina = localStorage.getItem("proximaPagina");
if (localStorage.getItem("proximaPagina") != "./nivel1.html") {
    window.location.href = "./index.html";
}
localStorage.setItem("proximaPagina", "./nivel2.html");

var numeroGerado = 0;
var resposta = 0;

var lbOpt1 = document.querySelector("#opt1");
var lbOpt2 = document.querySelector("#opt2");
var lbOpt3 = document.querySelector("#opt3");
var lbPrimeiroNumero = document.querySelector(".primeiroNumero");
var lbSegundoNumero = document.querySelector(".segundoNumero");

function fazPergunta() {
    var numerosPergunta = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
    resposta = numerosPergunta[0] + numerosPergunta[1];    

    lbPrimeiroNumero.textContent = numerosPergunta[0];
    lbSegundoNumero.textContent = numerosPergunta[1];

    var numerosResposta = [];
    var maiorNumero = Math.max(numerosPergunta[0], numerosPergunta[1]);
    retornaNumero1a20();

    for (i = 0; i < 2; i++) {
        while (numerosResposta.length < 2) {
            if ((resposta != numeroGerado) && (numeroGerado > maiorNumero) && (!numerosResposta.includes(numeroGerado))) {
                numerosResposta[i] = numeroGerado;
                retornaNumero1a20();
                break;
            } else {

                retornaNumero1a20();
            }
        }
    }

    numerosResposta[2] = resposta;
    numerosResposta.sort();

    lbOpt1.textContent = numerosResposta[0];
    lbOpt2.textContent = numerosResposta[1];
    lbOpt3.textContent = numerosResposta[2];
}

function retornaNumero1a20() {
    numeroGerado = Math.floor(Math.random() * 20) + 1;
}