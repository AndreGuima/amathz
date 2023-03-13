var btEasy = document.querySelector(".easy");
var btNormal = document.querySelector(".normal");
var btHard = document.querySelector(".hard");
var btExpert = document.querySelector(".expert");


btEasy.addEventListener('click', function() {
    localStorage.setItem("nivel", "easy");     
    localStorage.setItem("proximaPagina", "./nivel1.html");
});

btNormal.addEventListener('click', function() {
    localStorage.setItem("nivel", "normal");            
    localStorage.setItem("proximaPagina", "./nivel1.html");
});

btHard.addEventListener('click', function() {
    localStorage.setItem("nivel", "hard");            
    localStorage.setItem("proximaPagina", "./nivel1.html");
});

btExpert.addEventListener('click', function() {
    localStorage.setItem("nivel", "expert");            
    localStorage.setItem("proximaPagina", "./nivel1.html");
});