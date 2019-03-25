/* Manejo del DOM */
const valuesObjet = POKEMON.pokemon; //obeteniendo data en un array de todo el objeto POKEMON

const showData = view => {
  let valuesData = "";
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

const idBtnOrder = document.getElementById("btn-order");
idBtnOrder.addEventListener("change", () => {
  let orderDataPoke = sortData(
    valuesObjet,
    "name",
    document.getElementById("btn-order").value
  );
  showData(orderDataPoke);
});
