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

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('teste se é uma funcao', () => {
    expect(typeof(productDetails)).toBe('function');
  });
  it('teste se o retorno é do tipo array', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
    expect(typeof(value)).toContain();
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(obj)
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails('a', 'b')[0]).toBeInstanceOf(Object);
    expect(productDetails('a', 'b')[1]).toBeInstanceOf(Object);
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const [object1, object2] = productDetails('a', 'b');
    expect(object1).not.toEqual(object2);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    const [object1, object2] = productDetails('a', 'b');
    expect(object1.details.productId.endsWith('123')).toBe(true);
    expect(object2.details.productId.endsWith('123')).toBe(true);
  });
});
// ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.OK!
    // Teste se o retorno da função é um array.OK!
    // Teste se o array retornado pela função contém dois itens dentro.OK!
    // Teste se os dois itens dentro do array retornado pela função são objetos.OK!
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.OK!
    // Teste se os dois productIds terminam com 123.OK!