let contador = 0;

//DOM 
const valor = document.getElementById("valor")
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const reiniciar = document.getElementById("reiniciar");

//Eventos
sumar.addEventListener("click", () => {
    contador++;
    valor.innerHTML = contador;
})

restar.addEventListener("click", ()=> {
    contador--;
    valor.innerHTML = contador;
})

reiniciar.addEventListener("click", ()=> {
    contador = 0;
    valor.innerHTML = contador;
})