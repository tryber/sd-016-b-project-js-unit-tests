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
const obj = [{
  name: 'Alcool gel',
  details: {
    productId: 'Alcool gel123',
  }
},
{
  name: 'Máscara',
  details: {
    productId: 'Máscara123',
  }
}]
const obj1 = [{
  name: 'Arroz',
  details: {
    productId: 'Arroz123',
  }
},
{
  name: 'Feijão',
  details: {
    productId: 'Feijão123',
  }
}]

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('teste se é uma funcao', () => {
    expect(typeof(productDetails)).toBe('function')
  });
  it('teste se o retorno é do tipo arry', () => {
    expect(typeof(value)).toContain()
  });
  it('teste se o retorno é do tipo arry', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(obj)
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Feijão', 'Arroz')).toBe(obj1)
  });
});
// ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.