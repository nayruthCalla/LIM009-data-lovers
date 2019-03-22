/* Manejo del DOM */
const valuesObjet = POKEMON.pokemon; //obeteniendo data en un array de todo el objeto POKEMON
let valuesData = "";
const showData = view => {
  document.getElementById("cont-data").innerHTML = "";
  view.forEach(element => {
    valuesData = `
		<object class='style-mold'>
		<img src='${element.img}'/>
		<param />${element.name}
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
