var proximaPagina = localStorage.getItem("proximaPagina");
if (localStorage.getItem("proximaPagina") != "./nivel2.html") {
    window.location.href = "./index.html";
}
localStorage.setItem("proximaPagina", "./nivel3.html");

var numeroGerado = 0;
var resposta = 0;
var numerosPergunta = [];

function fazPergunta() {
    numerosPergunta = [];
    retornaNumero1a20();

    for (i = 0; i < 2; i++) {

        while (numerosPergunta.length < 2) {            
            if (numerosPergunta.length == 1) {
                if (numeroGerado <= numerosPergunta[0]) {
                    numerosPergunta[i] = numeroGerado;
                    break;
                }
            } else if (numeroGerado > 3) {
                numerosPergunta[i] = numeroGerado;
                retornaNumero1a20();
                break;
            }
            retornaNumero1a20();
        }
    }

    lbPrimeiroNumero.textContent = numerosPergunta[0];
    lbSegundoNumero.textContent = numerosPergunta[1];
    resposta = numerosPergunta[0] - numerosPergunta[1];

    monstaOpcoesRespostaSubtracao();
}

function retornaNumero1a20() {
    numeroGerado = Math.floor(Math.random() * 20) + 1;
}

function monstaOpcoesRespostaSubtracao() {

    var numerosResposta = [];
    var maiorNumero = Math.max(numerosPergunta[0], numerosPergunta[1]);
    retornaNumero1a20();

    for (i = 0; i < 2; i++) {
        while (numerosResposta.length < 2) {
            if ((resposta != numeroGerado) && (numeroGerado < maiorNumero) && (!numerosResposta.includes(numeroGerado))) {
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