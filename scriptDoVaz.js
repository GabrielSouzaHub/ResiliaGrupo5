//Um texto que cresce de tamanho ao passar o mouse por cima, como se fosse ampliado


let elemento = document.getElementById("vitorVaz");


elemento.addEventListener("mouseover", function() {
    elemento.style.fontSize = "25px";
    console.log("testando");
} )

elemento.addEventListener("mouseout", function() {
    elemento.style.fontSize = "20px";
    console.log("testando");
} )

