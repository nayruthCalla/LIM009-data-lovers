// const valuesObjet = POKEMON.pokemon;
fetch("data/pokemon/pokemon.json")
  .then(data => data.json())
  .then(data => {
    let valuesObjet = data.pokemon;
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
    //filtrar tiposvar arrTipos = [];
    let arrTipos = [];
    let arrTiposUnicos = [];
    /* Tipo */
    for (let i = 0; i < valuesObjet.length; i++) {
      if (valuesObjet[i].hasOwnProperty("type")) {
        arrTipos.push(valuesObjet[i].type);
      }
    }

    for (let i = 0; i < arrTipos.length; i++) {
      for (let j = 0; j < arrTipos[i].length; j++) {
        if (arrTiposUnicos.indexOf(arrTipos[i][j]) === -1) {
          arrTiposUnicos.push(arrTipos[i][j]);
        }
      }
    }

    for (let i = 0; i < arrTiposUnicos.length; i++) {
      document.getElementById("btn-filter").innerHTML += `	
           <option>${arrTiposUnicos[i]}</option>
           `;
    }
    //funcion filtrar

    let lisType = document.getElementById("btn-filter");
    lisType.addEventListener("change", () => {
      showData(
        GlobalPoke.filterData(
          valuesObjet,
          document.getElementById("btn-filter").value
        )
      );
    });

    const idBtnOrder = document.getElementById("btn-order");
    idBtnOrder.addEventListener("change", () => {
      showData(
        GlobalPoke.sortData(
          valuesObjet,
          "name",
          document.getElementById("btn-order").value
        )
      );
    });

    //Imprimiendo stata en secttion stata de html
    // document.getElementById("stata").innerHTML = "";
    document.getElementById("stata").innerHTML += `
<h4> ¿Sabias que el peso promedio de estos Pokémones es 
${GlobalPoke.computeStats(valuesObjet)} kg. </h4>`;

    // google.load("visualization", "1.0", { packages: ["corechart"] });
    google.charts.load("current", { packages: ["corechart"] });
    let drawChart = () => {
      let data = new google.visualization.DataTable();
      data.addColumn("string", "nombrePoke");
      data.addColumn("number", "kg");
      data.addRows([
        ["Peso Pokemonesther", 0],
        ["Peso Pokemonesther", GlobalPoke.computeStats(valuesObjet)]
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
  });
