const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
const btnAnterior = document.getElementById('btnAnterior')
const btnAleatorio = document.getElementById('btnAleatorio')
const btnProximo = document.getElementById('btnProximo')

var pokemonAtual = 1
buscarPokemon(1)

// FAZER EVENTOS E FUNCINALIDADES PARA OS BOTOES ANTERIOR E PROXIMO

/*
const resultado = fetch(url)
                    .then(function (resultado){
                        return resultado.json()
                    })
                    .then(function(resultado){
                        console.log(resultado)
                    })
*/

/*
function buscarPokemon(termo){
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    fetch(url)
        .then(resposta => resposta.json())
        .then(resposta => resultado.innerHTML = `
            <img src="${resposta.sprites.front_default}"/>
            <p>#${resposta.id}</p>
            <h2>${resposta.name}</h2>
    `)
}
*/

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    pokemonAtual = pokemon.id

    resultado.innerHTML = `
    <div class="bg-secondary-subtle p-3 rounded d-inline-block" style="box-shadow: 0 2px 10px">
        <img src="${pokemon.sprites.front_default}" width="250">
    </div>

    <p>#${pokemon.id}</p>
    <h2>${pokemon.name}</h2>

    <p>HP: ${pokemon.stats[0].base_stat}</p>
    <div class="progress mb-2">
        <div class="progress-bar" style="width: ${pokemon.stats[0].base_stat}%">
            ${pokemon.stats[0].base_stat}
        </div>
    </div>

    <p>Ataque: ${pokemon.stats[1].base_stat}</p>
    <div class="progress mb-2">
        <div class="progress-bar" style="width: ${pokemon.stats[1].base_stat}%">
            ${pokemon.stats[1].base_stat}
        </div>
    </div>

    <p>Defesa: ${pokemon.stats[2].base_stat}</p>
    <div class="progress mb-2">
        <div class="progress-bar" style="width: ${pokemon.stats[2].base_stat}%">
            ${pokemon.stats[2].base_stat}
        </div>
    </div>
`
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
    pokemonAtual = campoBusca.value
    buscarPokemon(pokemonAtual)
})

campoBusca.addEventListener('keyup', evento => {
    if (evento.key == "Enter") {
        btnBuscar.click()
    }
})

btnAnterior.addEventListener('click', () => {
    if (pokemonAtual == 1) {
        pokemonAtual = 1025
        buscarPokemon(pokemonAtual)
    } else {
        pokemonAtual--
        buscarPokemon(pokemonAtual)
    }
})

btnProximo.addEventListener('click', () => {
    if (pokemonAtual == 1025) {
        pokemonAtual = 1
        buscarPokemon(pokemonAtual)
    } else {
        pokemonAtual++
        buscarPokemon(pokemonAtual)
    }
})

btnAleatorio.addEventListener('click', () => {
    const max = 1025
    const min = 1
    pokemonAtual = Math.floor(Math.random() * (max - min + 1)) + min

    buscarPokemon(pokemonAtual)
})
