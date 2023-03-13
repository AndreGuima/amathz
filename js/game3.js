var proximaPagina = localStorage.getItem("proximaPagina");
if (localStorage.getItem("proximaPagina") != "./nivel3.html") {
    window.location.href = "./index.html";
}
localStorage.setItem("proximaPagina", "./nivel4.html");

var numeroGerado = 0;
var resposta = 0;
var maiorNumero = 0;

var lbOpt1 = document.querySelector("#opt1");
var lbOpt2 = document.querySelector("#opt2");
var lbOpt3 = document.querySelector("#opt3");
var lbPrimeiroNumero = document.querySelector(".primeiroNumero");
var lbSegundoNumero = document.querySelector(".segundoNumero");
var numerosPergunta = [];

function fazPergunta() {
    numerosPergunta = [];
    retornaNumero1a10();

    for (i = 0; i < 2; i++) {        
        numerosPergunta[i] = numeroGerado;
        retornaNumero1a10();
    }

    lbPrimeiroNumero.textContent = numerosPergunta[0];
    lbSegundoNumero.textContent = numerosPergunta[1];
    resposta = numerosPergunta[0] * numerosPergunta[1];

    maiorNumero = Math.max(numerosPergunta[0], numerosPergunta[1]);
    mostraOpcoesRespostaMultiplicacao();
}

function retornaNumero1a10() {
    numeroGerado = Math.floor(Math.random() * 10) + 1;
}

function retornaOpcaoDeRespostaMultiplicacao() {
    numeroGerado = numerosPergunta[0] * (Math.floor(Math.random() * 10) + 1);
}

function mostraOpcoesRespostaMultiplicacao() {

    var numerosResposta = [];    
    retornaOpcaoDeRespostaMultiplicacao();

    for (i = 0; i < 2; i++) {        
        while (numerosResposta.length < 2) {      
            console.log("Entrou no while com o numero: " + numeroGerado);
            
            if ((numeroGerado != resposta) && (numeroGerado > maiorNumero) && (!numerosResposta.includes(numeroGerado))) {
                console.log("Adicionou a opção de resposta com o numero: " + numeroGerado);
                numerosResposta[i] = numeroGerado;
                retornaOpcaoDeRespostaMultiplicacao();
                break;
            } else {
                console.log("Ignorou a opção de resposta do numero: " + numeroGerado);
                retornaOpcaoDeRespostaMultiplicacao();
            }
        }
    }

    numerosResposta[2] = resposta;
    numerosResposta.sort();

    lbOpt1.textContent = numerosResposta[0];
    lbOpt2.textContent = numerosResposta[1];
    lbOpt3.textContent = numerosResposta[2];
}