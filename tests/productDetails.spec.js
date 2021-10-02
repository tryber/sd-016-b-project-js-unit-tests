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
  it('Teste se productDetails é uma função.', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
  });  
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    // Matcher para verificar o tamanho.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).toBeInstanceOf(Object);
    expect(productDetails('Alcool gel', 'Máscara')[1]).toBeInstanceOf(Object);
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const [objeto, objeto2] = productDetails('a', 'b');
    expect(objeto).not.toEqual(objeto2);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    const [objeto, objeto2] = productDetails('a', 'b');
    expect(objeto.details.productId.endsWith('123')).toBe(true);
    expect(objeto2.details.productId.endsWith('123')).toBe(true);
  });
});
