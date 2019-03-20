/* Manejo del DOM */
const valuesObjet = Object.values(POKEMON.pokemon); //obeteniendo data en un array de todo el objeto POKEMON
const showData = (view) => {
	document.getElementById('cont-data').innerHTML += `
	<object class='style-mold'>
	<img src='${view.img}'/>
	<param name='${view.name}' value='${view.id}'/>${view.name}
	</object>
	`
}
valuesObjet.forEach(showData);






// const showPoke = (dataPoke) => {
// 	return `
// 	<div class="">
// 	<img class="img" src="${dataPoke.img}"></img>
// 	<h2>${dataPoke.name}</h2>
// 	</div>
// 	`
// }

// document.getElementById('cont-data').innerHTML = ` <h3>Estos son los nombres del pokemon</h3>
// <div id="poke">  </div>
// ${POKEMON.pokemon.map(showPoke).join(' ')}`

// //utilizando la funcion sort ('name',''a-z)
// const idBtn = document.getElementById('cont-main');
// const btn = document.getElementById("btn-order")

// let namesPoke = sortData('name', 'z-a'); //llamando a la funcion sort declarada en  data.js

// const viewData = (view) => { //funcion que capata nombres e ímagnes de la data

// 	document.getElementById('cont-order').innerHTML += ` 
// 	<div class="pokeBox ">

// 	<img class="img" src="${view.img}"></img>
// 	<h2>${view.name}</h2> 
// 	</div>


// 	`
// }
// btn.addEventListener('click', e => {
// 	document.getElementById('cont-data').style.display = 'none';
// 	console.log(e.target.id);
// 	if (e.target.id === 'btn-order') {
// 		namesPoke.forEach(viewData);

// 	}
// });
