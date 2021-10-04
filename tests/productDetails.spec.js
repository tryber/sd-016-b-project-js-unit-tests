describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
    const productOne = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const productTwo = productDetails('Alcool gel', 'Máscara')[1].details.productId;

    expect(productOne.slice(productOne.length -3) === '123');
    expect(productTwo.slice(productTwo.length -3) === '123');
  });
});
