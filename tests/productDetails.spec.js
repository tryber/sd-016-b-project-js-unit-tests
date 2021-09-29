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
    expect(productDetails()).toBeDefined();
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const product = productDetails('Alcool gel', 'Máscara');
    const teste = (typeof product[0] === 'object' && typeof product[1] === 'object') ? true : false;
    expect(teste).toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('parametro1', 'parametro2')).toEqual([ { name: 'parametro1', details: { productId: 'parametro1123' } },
    { name: 'parametro2', details: { productId: 'parametro2123' } } ]);
    // Teste se os dois productIds terminam com 123.
    const string1 = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const string2 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    const testar = (string1.substr(string1.length - 3, string1.length) ==='123' && string2.substr(string2.length - 3, string2.length) === '123') ? true : false;
    expect(testar).toBe(true);
  });
});
