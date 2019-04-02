const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name" && sortOrder === "a-z") {
    data.sort((a, b) => (a.name < b.name ? -1 : 0));
  } else if (sortBy === "name" && sortOrder === "z-a") {
    data.sort((a, b) => (a.name > b.name ? -1 : 0));
  }
  return data;
};

const filterData = (data, condition) => {
  const filterType = data.filter(
    ele => ele.type[0] === condition || ele.type[1] === condition
  );
  return filterType;
};

/////FUNCTION STATA PESO PROMEDIO
const computeStats = (data) => {
  let data_w = data.map(el => el.weight);
  let newi = 0;
  for (let i = 0; i < data_w.length; i++) {
    let arr = parseFloat(data_w[i].split(" ", 1));
    newi = newi + arr;
  }
  return parseInt(newi / data.length);
};
window.GlobalPoke = {
  sortData,
  filterData,
  computeStats
};
// window.sortData = sortData;
// window.filterData = filterData;
// window.computeStats = computeStats;
