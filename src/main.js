/* Manejo del DOM */
const showPoke = (dataPoke) => {
    return `
	<div class="pokeBox">
	<img class="img" src="${dataPoke.img}"></img>
	<h2>${dataPoke.name}</h2>
	</div>
	`
}

document.getElementById('cont-main').innerHTML =
 ` <div class ="pokeview">  <h1>Estos son todos los pokemones</h1>

${POKEMON.pokemon.map(showPoke).join(' ')}

</div>`
// //Filtrado
// document.getElementById('cont-main').innerHTML =
// ` POKEMON.pokemon.filter(pokemon => pokemon.type="Agua") ;
// `
 