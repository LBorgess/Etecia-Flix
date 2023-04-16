function criarCard(filme) {

    let main = document.querySelector("main") /* Seletor de elemento. Funciona igual o CSS */

    let card = document.createElement("div")
    card.classList.add("card")

    let poster = document.createElement("img")
    poster.src = "https://www.themoviedb.org/t/p/w220_and_h330_face/" + filme.poster_path

    let divNotas = document.createElement("div")
    divNotas.classList.add("notas")

    let icone = document.createElement("span")
    icone.classList.add("material-icons")
    icone.classList.add("estrela")
    icone.innerHTML = "star"

    let nota = document.createElement("span")
    nota.innerHTML = filme.vote_average.toFixed(1)

    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.href = "#"
    botao.innerHTML = "Detalhes"

    divNotas.appendChild(icone)
    divNotas.appendChild(nota)

    card.appendChild(poster)
    card.appendChild(divNotas)
    card.appendChild(botao)

    main.appendChild(card)

}


let filmes = [
    {
        nota: "7.3",
        poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg"
    },

    {
        nota: "6.8",
        poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/tyv3iU87q5IdTAUVLWJeILJ4Cyf.jpg"
    }
]

const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"


async function carregarDados(){
    let resposta = await fetch(url)
    let dados = await resposta.json()
    filmes = dados.results
    filmes.forEach(filme => criarCard(filme))
}

carregarDados()

// fetch(url).then(resposta => 
//     resposta.json().then(dados => filmes = dados.results)
// )  Busca os dados do site em JSON
    
