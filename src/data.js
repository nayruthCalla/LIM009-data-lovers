const sortData = (
  data,
  sortBy,
  sortOrder //funcion ordenar
) => {
  if (sortBy === "name" && sortOrder === "a-z") {
    data.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sortBy === "name" && sortOrder === "z-a") {
    data.sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  return data;
};
window.sortData = sortData;

const filter = (arrDat, condition) => {
  const filterType = arrDat.filter(
    ele => ele.type[0] === condition || ele.type[1] === condition
  );
  return filterType;
};
/////FUNCTION STATA PESO PROMEDIO
const computeStats=(data)=>{
  
    let data_w= data.map(el=>el.weight);
    let newi=0;
    for(let i=0;i<data_w.length;i++){
    let arr=parseFloat(data_w[i].split(" ",1));
   newi = newi + arr;
    };
    return parseInt(newi/data.length);
   }
       
