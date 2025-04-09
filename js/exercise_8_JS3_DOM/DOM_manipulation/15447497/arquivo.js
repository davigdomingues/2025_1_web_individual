/* Usando id e identificadores:
    document.getElementById("taskButton").addEventListener("click", function () {
    let paragrafo = document.getElementById("p1");
    paragrafo.innerHTML = "New Paragraph 1";

    document.getElementById("myImg").src = "stj.png"

    let novoItem = document.createElement("li");
    novoItem.textContent = "Item 4";
    let lista = document.querySelector("ul");
    lista.appendChild(novoItem);

    let estilo = document.getElementById("p2");
    if (estilo) {
        estilo.style.color = "yellow";
    }

    alert("Clicked!");
})
*/

// DOM puro (1)
/* aletrnância errada:
let estado = true
let paragrafo1 = document.querySelectorAll("p")[0];
let imagem = document.querySelector("img");
let novoItem = document.createElement("li");
let lista = document.querySelector("ul");
let paragrafo2 = document.querySelectorAll("p")[1];

document.getElementById("taskButton").addEventListener("click", function () {
    if (estado){
        paragrafo1.innerHTML = "New Paragraph 1";
    }

    else {
        paragrafo1.innerHTML = "Clicked!";
        imagem.src = "stj.png";
        novoItem.textContent = "Item 4";
        lista.appendChild(novoItem);
        paragrafo2.style.backgroundColor = "yellow";
    }

    estado = !estado
});
*/

// DOM puro (2)
/* Mudança consistente:
let estado = true;
let paragrafo1 = document.querySelectorAll("p")[0];
let paragrafo2 = document.querySelectorAll("p")[1];
let imagem = document.querySelector("img");
let lista = document.querySelector("ul");

document.getElementById("taskButton").addEventListener("click", function () {
    if (estado) {
        paragrafo1.innerHTML = "New Paragraph 1";
        imagem.src = "https://via.placeholder.com/100";
        paragrafo2.style.backgroundColor = "";

        if (lista.lastChild) {
            lista.removeChild(lista.lastChild);
        }
    }

    else {
        paragrafo1.innerHTML = "Clicked!";
        imagem.src = "stj.png";

        let novoItem = document.createElement("li");
        novoItem.textContent = "Item 4";
        lista.appendChild(novoItem);

        paragrafo2.style.backgroundColor = "yellow";
    }

    estado = !estado;
});
*/

let paragrafo1 = document.querySelectorAll("p")[0];
let paragrafo2 = document.querySelectorAll("p")[1];
let imagem = document.querySelector("img");
let lista = document.querySelector("ul");

document.getElementById("taskButton").addEventListener("click", function () {
    paragrafo1.innerHTML = "New Paragraph 1";

    document.querySelector("p").addEventListener("click", function () {
                paragrafo1.innerHTML = "Clicked!";
    });

    imagem.src = "stj.png";
    let novoItem = document.createElement("li");
    novoItem.textContent = "Item 4";
    lista.appendChild(novoItem);
    paragrafo2.style.backgroundColor = "yellow";
});