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