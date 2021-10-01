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
    const products = productDetails('Alcool gel', 'Máscara')
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')

    // Teste se o retorno da função é um array.
    expect(products).toBeInstanceOf(Array)

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(products).toHaveLength(2)

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(products[0]).toBeInstanceOf(Object)
    expect(products[1]).toBeInstanceOf(Object)

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const productsDifferent1 = productDetails('Alcool gel', 'Máscara')
    const productsDifferent2 = productDetails('Refri', 'Salgado')

    expect(productsDifferent1).not.toEqual(productsDifferent2)

    // Teste se os dois productIds terminam com 123.
    expect(products[0].details.productId).toBe("Alcool gel123")
    expect(products[1].details.productId).toBe("Máscara123")
  });
});
