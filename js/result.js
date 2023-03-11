acertos = localStorage.getItem("acertos");

var lbResultado = document.querySelector(".lbResultado");

if (lbResultado != undefined) {
    
    var lbMensagemResultado = document.querySelector(".lbMensagemResultado");
    var lbClassificacao = document.querySelector(".lbClassificacao");
    var btVoltar = document.querySelector("#botao__voltar");    

    if (acertos < 20) {
        lbResultado.textContent = "Você fez " + acertos + " pontos apenas!";
        lbClassificacao.textContent = "Tem alguém ai?"
        lbMensagemResultado.textContent = "Você está longe de poder avançar para o próximo nivel.";
    } else if (acertos < 30) {
        lbResultado.textContent = "Você fez " + acertos + " pontos apenas!";
        lbClassificacao.textContent = "Novato!"
        lbMensagemResultado.textContent = "Precisa treinar mais para avançar para o próximo nivel.";
    } else if (acertos < 35) {
        lbResultado.textContent = "Você fez " + acertos + " pontos.";
        lbClassificacao.textContent = "Ok, nota 6,5."
        lbMensagemResultado.textContent = "Precisa ser mais rápido para avançar para o próximo nivel.";
    } else if (acertos < 40) {
        lbResultado.textContent = "Você fez " + acertos + " pontos, muito bom!";
        lbClassificacao.textContent = "Boa! essa foi por pouco ein."
        lbMensagemResultado.textContent = "Se fizer mais que 40 você vai para o próximo nivel.";
    } else if (acertos <= 45) {
        lbResultado.textContent = "Você fez " + acertos + " pontos, TOP!!!";
        lbClassificacao.textContent = "Gênial! Você é maravilhoso!"
        lbMensagemResultado.textContent = "Parabéns! Pode avançar para o próximo nivel.";
        btVoltar.textContent = "Avançar!"
        btVoltar.href = "./nivel2.html";
    } else if (acertos > 45) {
        lbResultado.textContent = "Você fez " + acertos + " pontos, Como assim?!";
        lbClassificacao.textContent = "Você não existe!"
        lbMensagemResultado.textContent = "Ou você burlou o sistema ou você é o novo Albert Einstein.";
        btVoltar.textContent = "Avançar!"
        btVoltar.href = "./nivel2.html";
    }

}
