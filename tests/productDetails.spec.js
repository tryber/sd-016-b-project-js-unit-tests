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
  // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    const parametersOne = 'Alcool gel';
    const parametersTwo = 'Máscara';
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
    // Teste se o retorno da função é um array.
  it('Verifica se a função `productDetails` retorna um array', () => {
      expect(Array.isArray(productDetails(parametersOne, parametersTwo))).toBeTruthy();
  });
      // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se os dois itens do array retornado pela função são objetos', () => {
      expect(typeof productDetails(parametersOne, parametersTwo)[0]).toBe('object');
      expect(typeof productDetails(parametersOne, parametersTwo)[1]).toBe('object');
  });
      // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se a função quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
      expect(productDetails(parametersOne, parametersTwo)[0]).not.toBe(productDetails(parametersOne, parametersTwo)[1]);
  });
      // Teste se os dois productIds terminam com 123.
      const str = productDetails(parametersOne, parametersTwo);
      // const str1 =productDetails(parametersOne, parametersTwo)[1].endsWith('123'); 
      it('Verifica se os dois productIds terminam com 123', () => {
      expect(str[0].details.productId.endsWith('123')).toBeTruthy();
      expect(str[1].details.productId.endsWith('123')).toBeTruthy();
     // expect(str1).toBeTruthy();
  });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('verifica se a função retorna 3 propriedades', () => {
      expect(productDetails(parametersOne, parametersTwo).length).toStrictEqual(2);
  });
});
