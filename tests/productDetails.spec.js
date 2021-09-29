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

    //Verifica se os dois itens retornados pelo array são objetos
    function testObjectsInsideFunction (object) {
      if (typeof object[0] === 'object' && typeof object[1] === 'object') {
        return true;
      } 
      return false;
    };

    //Verifica se os objetos são iguais
    function areObjectsSame (object) {
      if (object[0].name === object[1].name && object[0].productId === object[1].productId) {
        return true;
      }
    
      return false;
    }
    
    //Verifica se os productId terminam com '123'
    function verifiesProductId (objeto) {
      let id1 = ''
      let id2 = ''
      for (i = 3; i > 0; i -= 1) {
        id1 += objeto[0].details.productId[objeto[0].details.productId.length - i]
        id2 += objeto[1].details.productId[objeto[1].details.productId.length - i]
        console.log(id1);
        console.log(id2);
      }
      if(id1 === id2) {
        return true;
      }
      return false;
    };
    
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(testObjectsInsideFunction(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(areObjectsSame(productDetails('Alcool gel', 'Alcool gel'))).toBe(true);
    expect(areObjectsSame(productDetails('Mascara', 'Alcool gel'))).toBe(false);
    // Teste se os dois productIds terminam com 123.
    expect(verifiesProductId(productDetails('Mascara', 'Alcool gel'))).toBe(true);
  });
});
