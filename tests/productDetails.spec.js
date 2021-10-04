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
// ajuda dos colegas de turma (hugo, mariana, gabriel e nathalia)
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  // Teste se productDetails é uma função.
  });
  it('Teste se o retorno da função é um array', () => {
    expect(productDetails('g', 'l')).toBeInstanceOf(Array);
  })
  it('Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('g', 'l')).toHaveLength(2);
  })
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(productDetails('g', 'l')[0]).toBeInstanceOf(Object);
    expect(productDetails('g', 'l')[1]).toBeInstanceOf(Object);
  })
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const [obj1, obj2] = productDetails('g', 'l');
    expect(obj1).not.toEqual(obj2);
  })
  it('Teste se os dois productIds terminam com 123', () => {
    const [objeto, objeto2] = productDetails('a', 'b');
    expect(objeto.details.productId.endsWith('123')).toBe(true);
    expect(objeto2.details.productId.endsWith('123')).toBe(true); 
  })
  
});
