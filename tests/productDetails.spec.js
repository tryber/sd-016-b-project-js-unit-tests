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
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails()).toHaveLength(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const [object1, object2] = productDetails('Alcool', 'Mascara')
    expect(typeof object1).toBe('object')
    expect(typeof object2).toBe('object')
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(object1).not.toEqual(object2)
    // Teste se os dois productIds terminam com 123.
    expect(object1.details.productId.endsWith('123')).toBe(true)
    expect(object2.details.productId.endsWith('123')).toBe(true)

  });
});
