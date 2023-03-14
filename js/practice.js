var btEasy = document.querySelector(".easy");
var btNormal = document.querySelector(".normal");
var btHard = document.querySelector(".hard");
var btExpert = document.querySelector(".expert");

localStorage.setItem("nivel", "easy"); 

btEasy.addEventListener('click', function() {        
    localStorage.setItem("proximaPagina", "./nivel1.html");
});

btNormal.addEventListener('click', function() {               
    localStorage.setItem("proximaPagina", "./nivel2.html");
});

btHard.addEventListener('click', function() {           
    localStorage.setItem("proximaPagina", "./nivel3.html");
});

btExpert.addEventListener('click', function() {               
    localStorage.setItem("proximaPagina", "./nivel4.html");
});