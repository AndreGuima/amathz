var btEasy = document.querySelector(".easy");
var btNormal = document.querySelector(".normal");
var btHard = document.querySelector(".hard");
var btExpert = document.querySelector(".expert");

localStorage.setItem("proximaPagina", "./nivel1.html");

btEasy.addEventListener('click', function() {
    localStorage.setItem("nivel", "easy");         
});

btNormal.addEventListener('click', function() {
    localStorage.setItem("nivel", "normal");                
});

btHard.addEventListener('click', function() {
    localStorage.setItem("nivel", "hard");                
});

btExpert.addEventListener('click', function() {
    localStorage.setItem("nivel", "expert");                
});