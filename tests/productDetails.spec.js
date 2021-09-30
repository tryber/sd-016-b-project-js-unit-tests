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

describe('6 - Implemente a função `productDetails`', () => {
  // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
    // Teste se o retorno da função é um array.
  it('Verifica se a função `productDetails` retorna um array', () => {
      expect(Array.isArray(productDetails())).toBeTruthy();
  });
      // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se os dois itens do array retornado pela função são objetos', () => {
      expect(productDetails()).toMatchObject({}, {}, {},);
  });
      // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica a função `productDetails` productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function');
  });
  
      // Teste se os dois productIds terminam com 123.
  it('Verifica a função `productDetails` productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function');
  });
    // Teste se o array retornado pela função contém dois itens dentro.
});
