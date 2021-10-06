/* eslint-disable no-unused-expressions */
const createMenu = require('../src/restaurant');

const objetoRetornado = createMenu({
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9, cerveja: 6.9 },
}); expect(objetoRetornado).toBeInstanceOf(Object);
expect(objetoRetornado).toMatchObject({ fetchMenu: expect.any(Function) });
it('should return keys food and drinks', () => {
expect(Object.keys(objetoRetornado.fetchMenu())).toEqual([
  'food',
  'drinks',
]);
});
it('Should return the same object', () => {
expect({
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9, cerveja: 6.9 },
}).toEqual(objetoRetornado.fetchMenu());
});
// Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
// --------------------------------------------------------------------------------------
// TESTE 4: Verifique se 'objetoRetornado.consumption', aqpós a criação do menu, retorna um array vazio.
// ```
// const objetoRetornado = createMenu(objetoQualquer);
// objetoRetornado.consumption // Retorno: []
// ```
it('should return a empty array', () => {
expect(objetoRetornado.consumption).toEqual([]);
});
// Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
// --------------------------------------------------------------------------------------
// TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
// passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
// ao array retornado em `objetoRetornado.consumption`.
// ```
// const objetoRetornado = createMenu(objetoQualquer);
// objetoRetornado.order("coxinha");
// objetoRetornado.consumption // Retorno: ["coxinha"]
// ```
// eslint-disable-next-line max-len
it('if receives a string parameter in order, should return in object.consumption a array with the same string gived by parameter in order', () => {
// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line no-sequences
// eslint-disable-next-line no-unused-expressions
// eslint-disable-next-line no-sequences
objetoRetornado.order('coxinha'),
  expect(objetoRetornado.consumption).toContain('coxinha');
});
// Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
// --------------------------------------------------------------------------------------
// TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
// ```
// objetoRetornado.order("coxinha");
// objetoRetornado.order("agua");
// objetoRetornado.order("sopa");
// objetoRetornado.order("sashimi");
// objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
// ```
it('should return an array (objetoRetornado.Consumption) with the oredered itens', () => {
  objetoRetornado.order('agua');
  objetoRetornado.order('sopa');
  objetoRetornado.order('sashimi');
  expect(objetoRetornado.consumption).toEqual([
    'coxinha',
    'agua',
    'sopa',
    'sashimi',
  ]);
});
describe('Tests with the same itens', () => {
// eslint-disable-next-line no-shadow
const objetoRetornado = createMenu({
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9, cerveja: 6.9 },
});
it('TEST 7 - IF ACEPPT ITENS WITH THE SAME NAME', () => {
  objetoRetornado.order('coxinha');
  objetoRetornado.order('agua');
  objetoRetornado.order('coxinha');
  expect(objetoRetornado.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
});

it('TEST 8 - SHOULD RETURN THE SAME VALUE AS EXPECTED', () => {
  expect(objetoRetornado.pay()).toBe(11.7);
});
});

describe('Test 8 - Testing test 8 with new values', () => {
const newobjetoRetornado = createMenu({
  food: { coxinha: 3.9, sanduiche: 9.9 },
  drinks: { agua: 3.9, cerveja: 6.9 },
});
it('testing number 8 again with new values', () => {
  newobjetoRetornado.order('sanduiche');
  newobjetoRetornado.order('cerveja');
  newobjetoRetornado.order('agua');
  newobjetoRetornado.order('coxinha');
  newobjetoRetornado.order('sanduiche');
  expect(newobjetoRetornado.pay()).toBe(34.5);
});
});
