describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    fail('Teste vazio!');
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    // Escreva um teste em que a função recebe [' '] e retorna false
  // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros', () => {
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
   }); 
  // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
  it('Verifica se a função `numbers`retorna `false` quando o array contém parametros NaN', () => {
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
  });
  // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
  it('Verifica se a função `numbers`retorna `false` quando o array contém letras', () => {
    expect(numbers([1, 'a', 3])).toEqual(false);
  });
  // Escreva um teste em que a função recebe [' '] e retorna false
  it('Verifica se a função `numbers`retorna `false` quando o array é vazio', () => {
    expect(numbers([' '])).toEqual(false);
  });
});