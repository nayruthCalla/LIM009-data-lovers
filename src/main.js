/* Manejo del DOM */
const showPoke = (dataPoke) => {
    return `
	<div class="pokeEst">
	<img class="img" src="${dataPoke.img}"></img>
	<h2>${dataPoke.name}</h2>
	</div>
	`
}

document.getElementById('cont-main').innerHTML = ` <h1>Estos son los nombres del pokemon</h1>
<div id="poke">  </div>
${POKEMON.pokemon.map(showPoke).join(' ')}`