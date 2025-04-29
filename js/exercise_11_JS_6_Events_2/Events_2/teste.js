document.getElementById("get-joke").addEventListener('click', () => {
    const jokeBox = document.getElementById("joke");
    jokeBox.innerHTML = "Carregando sua piada..";

    fetch("https://v2.jokeapi.dev/joke/Any")
        .then(response => {
            if (!response.ok)
                throw new Error("Erro");
            return response.json();
        })

        .then(data => {
            if (data.error)
                throw new Error(data.message || "Erro no dado obtido");

            if (data.type === "single") {
                jokeBox.innerHTML = data.joke;
            }

            else if (data.type === "twopart") {
                jokeBox.innerHTML = `${data.setup}<br>${data.delivery}`;
            }

            else
                jokeBox.innerHTML = "Piada não existente!";
        })

        .catch(error => {
            jokeBox.innerHTML = "Erro de parsing da piada";
        });
});