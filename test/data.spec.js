global.window = global;
require('../src/data.js');
require('./data.spec.js');
require('../src/main.js');

describe('POKEMON es un objeto',()=>{
  it('POKEMON deberìa ser un objeto',()=>{
    expect(typeof POKEMON).toBe('Object');
  })
})
describe('computeStats', () => {
    it('ComputeStats deberia ser una función', () => {
    expect(typeof functionsPokemon.computeStats).toBe('function');

  });
  
});
describe('filter', ()=>{
  it("Filter debería ser una función", ()=>{
    expect(typeof functionsPokemon.filterData).toBe('function');
  })
})
 describe('sortData', ()=>{
  it("sortData debería ser una función", ()=>{
    expect(typeof functionsPokemon.sortData).toBe('number');
  })
})


