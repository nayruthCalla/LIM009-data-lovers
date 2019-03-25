/* Manejo del DOM */
const valuesObjet = POKEMON.pokemon; //obeteniendo data en un array de todo el objeto POKEMON
let valuesData = "";
const showData = view => {
  document.getElementById("cont-data").innerHTML = "";
  view.forEach(element => {
    valuesData = `
    
      <div class="row cuatro-columnas"
        <article class="col-xs-12 col-sm-6 col-ml-3">
          <img src='${element.img}'/>
          <h3 class='color-font' >${element.name}</h3>
           </article>
	      	</div>
		`;
    document.getElementById("cont-data").innerHTML += `${valuesData}`;
  });
};
showData(valuesObjet);
//filtrar
var arrTipos = [];
var arrTiposUnicos = [];

/* Tipo */
for (let i = 0; i < valuesObjet.length; i++) {
  // console.log(arrData[i].hasOwnProperty('type'))
  if (valuesObjet[i].hasOwnProperty("type")) {
    arrTipos.push(valuesObjet[i].type);
  }
}
for (let i = 0; i < arrTipos.length; i++) {
  // console.log(arrTiposUnicos[i])
  for (let j = 0; j < arrTipos[i].length; j++) {
    // console.log(arrTiposUnicos.push(arrTipos[i][j]));
    if (arrTiposUnicos.indexOf(arrTipos[i][j]) === -1) {
      arrTiposUnicos.push(arrTipos[i][j]);
      // arrTiposUnicos;
    }
  }
}

for (var i = 0; i < arrTiposUnicos.length; i++) {
  document.getElementById("btn-filter").innerHTML += `	
           <option>${arrTiposUnicos[i]}</option>
           `;
}
//funcion filtrar
let cont3 = document.getElementById("btn-filter");
cont3.addEventListener("change", () => {
  let filterData = filter(
    valuesObjet,
    document.getElementById("btn-filter").value
  );
  showData(filterData);
});

const idBtnOrder = document.getElementById("btn-order");
idBtnOrder.addEventListener("change", () => {
  let orderDataPoke = sortData(
    valuesObjet,
    "name",
    document.getElementById("btn-order").value
  );
  showData(orderDataPoke);
});

//Imprimiendo stata en secttion stata de html
document.getElementById("stata").innerHTML = "";
document.getElementById("stata").innerHTML += `

<h1>HOLA MUNDO</h1>
<h4> Sabias q el peso promedio es 
${computeStats(valuesObjet)} </h4>`;
