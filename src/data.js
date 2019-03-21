
const sortData = (data, sortBy, sortOrder) => //funcion ordenar
{
    if (sortBy === 'name' && sortOrder === 'a-z') {
        data.sort((a, b) => a.name > b.name ? 1 : -1)
    }
    else
        if (sortBy === 'name' && sortOrder === 'z-a') {
            data.sort((a, b) => a.name < b.name ? 1 : -1)
        }
    return data;
}
window.sortData = sortData;

const filter=(arrDat, condition)=>{

    
}