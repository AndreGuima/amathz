var acertos = localStorage.getItem("acertos");
var nivel = localStorage.getItem("nivel");
var btVoltar = document.querySelector("#botao__voltar");       

if (nivel === "practice") {
    btVoltar.textContent = "Back";
    localStorage.setItem("proximaPagina", "./index.html");
    btVoltar.href = proximaPagina;
}
var proximaPagina = localStorage.getItem("proximaPagina");
btVoltar.href = proximaPagina;

var lbResultado = document.querySelector(".lbResultado");

if (lbResultado != undefined) {
    
    var lbMensagemResultado = document.querySelector(".lbMensagemResultado");
    var lbClassificacao = document.querySelector(".lbClassificacao");
     

    if (acertos < 5) {
        lbResultado.textContent = "Você fez " + acertos + " pontos apenas!";
        lbClassificacao.textContent = "Tem alguém ai?";
        lbMensagemResultado.textContent = "Você está longe de poder avançar para o próximo nivel.";
    } else if (acertos < 10) {
        lbResultado.textContent = "Você fez " + acertos + " pontos apenas!";
        lbClassificacao.textContent = "Vamos começar?";
        lbMensagemResultado.textContent = "Você está longe de poder avançar para o próximo nivel.";
    } else if (acertos < 20) {
        lbResultado.textContent = "Você só fez " + acertos + " pontos";
        lbClassificacao.textContent = "Estamos aquecendo ainda.";
        lbMensagemResultado.textContent = "Você precisa se concentrar mais.";
    } else if (acertos <= 30) {
        if (nivel === "easy" || nivel === "practice") {
            lbResultado.textContent = "Você fez " + acertos + " pontos, TOP!!!";
            lbClassificacao.textContent = "Boa!";
            lbMensagemResultado.textContent = "Parabéns! Pode avançar para o próximo nivel.";                        
        } else {
            lbResultado.textContent = "Você fez " + acertos + " pontos apenas!";
            lbClassificacao.textContent = "Novato!";
            lbMensagemResultado.textContent = "Precisa treinar mais para avançar para o próximo nivel.";
        }        
    } else if (acertos <= 35) {
        if (nivel === "easy" || nivel === "normal" || nivel === "practice") {
            lbResultado.textContent = "Você fez " + acertos + " pontos, TOP!!!";
            lbClassificacao.textContent = "Você é demais!";
            lbMensagemResultado.textContent = "Parabéns! Pode avançar para o próximo nivel.";                        
        } else {
            lbResultado.textContent = "Você fez " + acertos + " pontos.";
            lbClassificacao.textContent = "Ok, bacana.";
            lbMensagemResultado.textContent = "Precisa ser mais rápido para avançar para o próximo nivel.";
        }        
    } else if (acertos <= 40) {
        if (nivel === "easy" || nivel === "normal" || nivel === "hard" || nivel === "practice") {
            lbResultado.textContent = "Você fez " + acertos + " pontos, TOP!!!";
            lbClassificacao.textContent = "Gênial! Você é demais!";
            lbMensagemResultado.textContent = "Parabéns! Pode avançar para o próximo nivel.";                        
        } else {
            lbResultado.textContent = "Você fez " + acertos + " pontos, muito bom!";
            lbClassificacao.textContent = "Boa! essa foi por pouco ein.";
            lbMensagemResultado.textContent = "Se fizer mais que 40 você vai para o próximo nivel.";
        }        
    } else if (acertos <= 45) {
        lbResultado.textContent = "Você fez " + acertos + " pontos, TOP!!!";
        lbClassificacao.textContent = "Gênial! Você é demais!";
        lbMensagemResultado.textContent = "Parabéns! Pode avançar para o próximo nivel.";
    } else if (acertos > 45) {
        lbResultado.textContent = "Você fez " + acertos + " pontos, Como assim?!";
        lbClassificacao.textContent = "Você não existe!";
        lbMensagemResultado.textContent = "Ou você burlou o sistema ou você é o novo Albert Einstein.";
    }
}
