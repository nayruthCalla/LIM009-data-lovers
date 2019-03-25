/* Manejo del DOM */
const valuesObjet = POKEMON.pokemon; //obeteniendo data en un array de todo el objeto POKEMON
let valuesData = "";
const showData = view => {
  document.getElementById("cont-data").innerHTML = "";
  view.forEach(element => {
    valuesData = `
    
      <div class="row cuatro-columnas"
        <div class="col-xs-12 col-sm-6 col-ml-3">
          <img src='${element.img}'/>
          <h2 class="namePoke"/>${element.name} </h2>
           </div>
	      	</object>
		`;
    document.getElementById("cont-data").innerHTML += `${valuesData}`;
  });
};
showData(valuesObjet);

const idBtn = document.getElementById("id-btn");
let namesPoke = sortData(valuesObjet, "name", "a-z");

idBtn.addEventListener("click", e => {
  // document.getElementById('content1').style.display= 'none';

  if (e.target.id === "btn-name") {
    // document.getElementById("content2").innerHTML = `${namesPoke
    //   .map(viewPoke)
    //   .join(" ")}`;
    showData(namesPoke);
  }
});
