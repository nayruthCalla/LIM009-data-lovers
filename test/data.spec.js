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
<<<<<<< HEAD
  // it('debería retornar "example"', () => {
  //   assert.equal(example(), 'example');
  // });
});
=======
})
//Test de definiciones


describe('example', () => {

  
it('debería ser una objeto', () => {
  assert.equal(typeof POKEMON, 'object');
});
  
  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });
  it('debería ser una función', () => {
    assert.equal(typeof sortData, 'function');
  });
  it('debería ser una función', () => {
    assert.equal(typeof computeStats, 'function');
  });
  
})
>>>>>>> d6b059253cba60fa4341ac3990e446ca129d145a
