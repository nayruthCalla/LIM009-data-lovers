const sortData = (data,sortBy,sortOrder) => {
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
window.filter = filter;

computeStats(data){
    
}
