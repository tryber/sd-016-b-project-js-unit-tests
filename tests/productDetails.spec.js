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
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('ḿascara', 'álcool em gel'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('máscara', 'álcool em gel')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
      const itens = productDetails('máscara', 'álcool em gel');
      for (let i = 0; i < itens.length; i += 1) {
        expect(typeof itens[i]). toBe('object');
      }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(itens[0]).not.toEqual(itens[1]);
    // Teste se os dois productIds terminam com 123.
    for (let i = 0 ; i < itens.length; i += 1) {
      const id = itens[i].details.productId;
      const inicio = id.length - 3;
      const final = id.length;
      expect(id.slice(inicio, final)).toBe('123')
    }
  });
});
