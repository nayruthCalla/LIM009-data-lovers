/* Manejo del DOM */
const showPoke = (dataPoke) => {
	return `
	<div class="pokeBox">
	<img class="img" src="${dataPoke.img}"></img>
	<h2>${dataPoke.name}</h2>
	</div>
	`
}

document.getElementById('cont-data').innerHTML = ` <h3>Estos son los nombres del pokemon</h3>
<div id="poke">  </div>
${POKEMON.pokemon.map(showPoke).join(' ')}`

//utilizando la funcion sort ('name',''a-z)
const idBtn = document.getElementById('cont-main');

let namesPoke = sortData('name', 'z-a'); //llamando a la funcion sort declarada en  data.js

const viewData = (view) => { //funcion que capata nombres e ímagnes de la data

	document.getElementById('cont-order').innerHTML += ` 
	<div class="pokeBox ">
	 
	<img class="img" src="${view.img}"></img>
	<h2>${view.name}</h2> 
	</div>


	`
}
idBtn.addEventListener('click', e => {
	document.getElementById('cont-data').style.display = 'none';

	if (e.target.id === 'btn-order') {
		namesPoke.forEach(viewData);
	}
});
