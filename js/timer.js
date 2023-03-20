var button = document.querySelector("#container__timer__botao");
var mostrador = document.querySelector("#countdown");
var points = document.querySelector(".points");

button.addEventListener('click', function() {
    fazPergunta();

    lbOpt1.addEventListener("click", function () {
        verificaAcerto(this.textContent);
    });
    
    lbOpt2.addEventListener("click", function () {
        verificaAcerto(this.textContent);
    });
    
    lbOpt3.addEventListener("click", function () {
        verificaAcerto(this.textContent);
    });

    localStorage.setItem("acertos", 0);
    this.classList.add("invisivel");
    
    new Timer(1, mostrador, function() { 
        window.location.href = "./result.html";  
    }).start();
    
});

function Timer(mins, target, cb) {
    this.counter = mins * 60;
    this.target = target;
    this.callback = cb;
}
Timer.prototype.pad = function(s) {
    return (s < 10) ? '0' + s : s;
}
Timer.prototype.start = function(s) {
    this.count();
}
Timer.prototype.stop = function(s) {
    this.count();
}
Timer.prototype.done = function(s) {
    if (this.callback) this.callback();
}
Timer.prototype.display = function(s) {
    this.target.innerHTML = this.pad(s);
}
Timer.prototype.count = function(s) {
    var self = this;
    self.display.call(self, self.counter);
    self.counter--;
    var clock = setInterval(function() {
        self.display(self.counter);
        self.counter--;
        if (self.counter < 0) {
            clearInterval(clock);
            self.done.call(self);
        }
    }, 1000);
}

function verificaAcerto(chute) {
    if (chute != resposta) {        
        window.location.href = "./result.html";
    } else {
        acertos = localStorage.getItem("acertos");
        acertos++;
        points.textContent = "Points: " + acertos;
        localStorage.setItem("acertos", acertos);
    }
    
    fazPergunta();
}