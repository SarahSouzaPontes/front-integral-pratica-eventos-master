const root = document.querySelector("body")
const paises = document.querySelector(".paises")
const buscaInput = document.querySelector(".busca")

let div

buscaInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.key == "") return;

    fetch(`https://restcountries.com/v2/name/${buscaInput.value}`).then(function (resposta) {
        const promiseBody = resposta.json();
        console.log(promiseBody)
        promiseBody.then(function (body) {
            body.forEach(function (body2) {

                div = document.createElement("div")

                const nome = document.createElement("h2")
                nome.textContent = (` País: ${body2.name}`)

                const bandeira = document.createElement("img")
                bandeira.src = (`${body2.flag}`)

                const capital = document.createElement("p")
                capital.textContent = (`Capital: ${body2.capital}`)

                const regiao = document.createElement("span")
                regiao.textContent = (`Região: ${body2.region}`)

                const populacao = document.createElement("p")
                populacao.textContent = (`Número populacional: ${body2.population}`)

                div.append(nome, bandeira, capital, regiao, populacao)
                paises.append(div)
                root.append(paises)

            });
        });
        div.remove();

    });
    buscaInput.value = ''
});
