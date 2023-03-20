var btEasy = document.querySelector(".easy");
var btNormal = document.querySelector(".normal");
var btHard = document.querySelector(".hard");
var btExpert = document.querySelector(".expert");
var btPractice = document.querySelector(".practice");

localStorage.setItem("nivel", "practice"); 

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

btPractice.addEventListener('click', function() {               
    localStorage.setItem("proximaPagina", "./index.html");
});