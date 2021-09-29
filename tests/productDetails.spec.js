const productDetails = require('../src/productDetails')

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
    expect(typeof productDetails).toEqual('function')

    // Teste se o retorno da função é um array.
    expect(Array.isArray(products)).toEqual(true)

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(products.length).toEqual(2)

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    products.forEach(element => {
      expect(typeof element).toEqual('object')
    })
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(products[0] !== products[1]).toEqual(true)

    // Teste se os dois productIds terminam com 123.
    expect(products[0].details.productId).toMatch('Alcool gel123');
    expect(products[1].details.productId).toMatch('Máscara123');
  })
})
