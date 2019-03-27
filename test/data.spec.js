global.window = global;
global.assert = 
require('chai').assert;
require('../src/data.js');
require('./data.spec.js');
require('../data/pokemon.pokemon.js');


// COMPROBANDO QUE POKEMON ES OBJETO:

describe('POKEMON', ()=>{
  it('debería ser un objeto', ()=>{
    assert.equal(typeof POKEMON, 'object');
})})


const arrTest=["45.6 kg", "65.7 kg","85 kg" ];
describe('window.computeStats', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof computeStats(), 'function');
  });

  it('debería retornar un promedio de los numéros que están dentro de strings ', () => {
    assert.equal(computeStats(arrTest), '65');
  });
  // it('debería retornar "example"', () => {
  //   assert.equal(example(), 'example');
  // });
});
