let btn= document.getElementById("btn");
let button = btn.querySelector("button");

btn.addEventListener("click", function() {
    alert("¡Hola! Soy el div");
});

button.addEventListener("click", function(event) {
    event.stopPropagation();
});