const assert = require('assert');
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
    const obj = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let i = 0; i < productDetails.length; i += 1) {
      if (typeof productDetails[i] === 'object') {
        return assert.strictEqual(productDetails, 'object');
      }
    }
    // Teste que os dois objetos são diferentes entre si.
    for (let informacao of productDetails()){
      if(informacao[0] === informacao[1]){
        return undefined;
      }
    }
    // Teste que os dois productIds terminam com 123.
    for (let i = 0; i < obj.length; i += 1) {  
        return assert.strictEqual(obj[i].details.productId, `123`);    
    }
  });
});
