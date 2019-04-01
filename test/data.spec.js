global.window = global;
require('../src/data.js');
require('./data.spec.js');
require('../src/main.js');
require('../src/data/pokemon/pokemon.js');

describe('computeStats', () => {
    it('ComputeStats deberia ser una función', () => {
    expect(typeof window.computeStats).toBe('function');

  });
  
});
describe('filter', ()=>{
  it("Filter debería ser una función", ()=>{
    expect(typeof window.filterData()).toBe('function');
  })
})
// describe('sortData', ()=>{
//   it("sortData debería ser una función", ()=>{
//     expect(typeof window.sortData(pokesToFilter).toBe('number'));
//   })
// })



