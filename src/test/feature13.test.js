// Testes de referência – Feature 13
// Execute com: node --test test/feature13.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const feature = require('../src/features/feature13');
test('converte letras para minúsculas', () => {
 assert.equal(feature.execute({ texto: 'CI/CD' }).resultado, 'ci/cd');
});
test('preserva espaços, números, símbolos e acentos', () => {
 assert.equal(feature.execute({ texto: 'AÇÃO 123!' }).resultado, 'ação 123!');
 assert.equal(feature.execute({ texto: '' }).resultado, '');
});
test('rejeita entrada não textual', () => {
 assert.throws(() => feature.execute({ texto: [] }), { name: 'Error' });
});
