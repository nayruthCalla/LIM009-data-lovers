/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


// window.showDataPoke=showDataPoke;

// const example = () => { 
//   return 'example';
// };

// window.example = example;

const data = Object.values(POKEMON.pokemon); //obeteniendo data en un array de todo el objeto POKEMON


let sortData = (sortBy, sortOrder) => { //funcion ordenar

    // let data= fullData();//recorremos con map todo el obejeto para obetenr el valor de propiedad nombre
    if (sortBy === 'name' && sortOrder === 'a-z') {
        data.sort((a, b) => a.name > b.name ? 1 : -1)

        //  {

        // 	if(a>b){
        // 		return 1;
        // 	}
        // 	if(a<b){
        // 		return -1;
        // 	}else{
        // 		return 0;
        // 	}

        // }
        // )

    } else if (sortBy === 'name' && sortOrder === 'z-a') {
        data.sort((a, b) => a.name < b.name ? 1 : -1)
        // 	{

        // 	if(a<b){
        // 		return 1;
        // 	}
        // 	if(a>b){
        // 		return -1;
        // 	}else{
        // 		return 0;
        // 	}

        // }
        // )

    }
    // console.log()
    //let resu=data.map((el)=>el.name)
    return data;
}



// console.log(sortData('name','a-z'));




window.sortData = sortData;
