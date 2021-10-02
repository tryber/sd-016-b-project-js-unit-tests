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

    // Teste se productDetails é uma função.
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function'); //tobe ser, estar
  });

  // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função `productDetails` é um Array', () => {
    expect(typeof productDetails).toBe('function'); //tobe ser, estar
  });
  
  // Teste se o array retornado pela função contém dois itens dentro.
  //https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber
  it('Se o array retornado pela funcao tem dois itens dentro',() => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
  });

  // Teste se os dois itens dentro do array retornado pela função são objetos.
  //https://jestjs.io/pt-BR/docs/expect#tobeinstanceofclass
  it('Testar se os dois itens dentro do array retornado pela funcao sao objetos', () =>{
    expect(productDetails('Alcool gel', 'Máscara')[0]).toBeInstanceOf(Object);
    expect(productDetails('Alcool gel', 'Máscara')[1]).toBeInstanceOf(Object);
  });

// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
it('teste quando passado parametro diferente entre si, os objetos se diferem',() => {
  //quando passamos para função os parametro 'Alcool gel','Máscara' não é igual
  //quando passamos esses parametros de forma invertida
  expect(productDetails('Alcool gel', 'Máscara')).not.toBe(
    productDetails('Máscara', 'Alcool gel')
  );
});

// Teste se os dois productIds terminam com 123.
//https://jestjs.io/pt-BR/docs/expect#tomatchregexp--string
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
it('Teste se os dois productIds terminal com 123', () =>{
  expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.slice(-3)).toMatch('123');
  expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.slice(-3)).toMatch('123');
});

});
