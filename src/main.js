// import { error } from "util";

const valuesObjete = POKEMON.pokemon;
let arrTipos = [];
let arrTiposUnicos = [];
// let valuesObjete = [];
const url = "data/pokemon/pokemon.json";
fetch(url)
  .then(
    response => response.json()
    // if (response.status !== 200) {
    //   return ;
    // } else {
    //   console.log("error");
    // }
  )
  .then(valuesObjetPoke => {
    // console.log(valuesObjetPoke);
    let valuesObjete = valuesObjetPoke.pokemon;
    showData(valuesObjete);
    viewtipyPoke(valuesObjete);
    filterFetch(valuesObjete);
    orderFetch(valuesObjete);
    stataFetch(valuesObjete);
    // console.log();
  })
  .catch(error => {
    console.log(error);
  });

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

// showData(valuesObjete);
//filtrar tiposvar arrTipos = [];

const viewtipyPoke = valuesObjet => {
  for (let i = 0; i < valuesObjet.length; i++) {
    if (valuesObjet[i].hasOwnProperty("type")) {
      arrTipos.push(valuesObjet[i].type);
    }
  }
  for (let i = 0; i < arrTipos.length; i++) {
    console.log(arrTipos.length);
    for (let j = 0; j < arrTipos[i].length; j++) {
      if (arrTiposUnicos.indexOf(arrTipos[i][j]) === -1) {
        arrTiposUnicos.push(arrTipos[i][j]);
      }
    }
  }
  arrTiposUnicos.forEach(element => {
    document.getElementById("btn-filter").innerHTML += `
    <option>${element}</option>
    `;
  });
};

//funcion filtrar

let lisType = document.getElementById("btn-filter");
const filterFetch = valuesObjet => {
  return lisType.addEventListener("change", () => {
    showData(
      GlobalPoke.filterData(
        valuesObjet,
        document.getElementById("btn-filter").value
      )
    );
  });
};

const idBtnOrder = document.getElementById("btn-order");
const orderFetch = valuesObjet => {
  return idBtnOrder.addEventListener("change", () => {
    showData(
      GlobalPoke.sortData(
        valuesObjet,
        "name",
        document.getElementById("btn-order").value
      )
    );
  });
};

// //Imprimiendo estadistica del peso de los pokemones en html

const stataFetch = valuesObjet => {
  return (document.getElementById("stata").innerHTML += `
<h4> ¿Sabias que el peso promedio de estos Pokémones es
${GlobalPoke.computeStats(valuesObjet)} kg. </h4>`);
};

// grafico de la estadistica de los pesos de los pokemones
google.charts.load("current", { packages: ["corechart"] });
let drawChart = () => {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "nombrePoke");
  data.addColumn("number", "kg");
  data.addRows([
    ["Peso Pokemonesther", 0],
    ["Peso Pokemonesther", GlobalPoke.computeStats(valuesObjete)]
  ]);
  let option = {
    title: "Peso promedio de los Pokémones",
    legend: { position: "none" },
    width: "50%",
    heigth: "10%",
    borderRadius: "15px",
    titleTextStyle: { color: "#871b47", fontSize: 18 }
  };
  let chart = new google.visualization.AreaChart(
    document.getElementById("draw-estata")
  );
  chart.draw(data, option);
};

google.charts.setOnLoadCallback(drawChart);
