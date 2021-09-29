const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Testa se é uma função', () => {
      expect(typeof (productDetails)).toEqual('function');
    })
    // Teste se o retorno da função é um array.
    it('Testa se o retorno da função é um array', () => {
      expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
    })
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Testa se o retorno da função é um array', () => {
      expect(productDetails('Alcool gel', 'Máscara').length).toEqual(2);
    })
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Testa se os itens no retorno da função são objetos', () => {
      expect(typeof(productDetails('Alcool gel', 'Máscara'))).toBe('object');
    })
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Testa se os parâmetros são diferentes, para itens diferentes', () => {
      expect((productDetails('Alcool gel', 'Máscara')[0]) !== (productDetails('Alcool gel', 'Máscara')[1])).toBeTruthy();
    })
    // Teste se os dois productIds terminam com 123.
    it('Testa se os dois productIds terminam com 123', () => {
      expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch('Alcool gel123');
      expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch('Máscara123');
    })
  });
