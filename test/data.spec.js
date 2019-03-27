global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
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