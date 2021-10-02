const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  const menuEx = createMenu({food: {'coxinha': 3.90},drinks: {'agua': 3.90}});
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenu({food: {'coxinha': 3.90, 'sanduiche': 9.90},drinks: {'agua': 3.90, 'cerveja': 6.90}}).fetchMenu).toEqual('function');
  });
  it('Verifica se retorna um objeto com as chaves food e drink vazias.', () => {
    expect(createMenu({food: {}, drinks: {}}).fetchMenu()).toEqual({food: {}, drinks: {}});
  });
  it('Verifica se o objeto retornado é identico ao parametro passado', () => {
    expect(menuEx.fetchMenu()).toStrictEqual({food: {'coxinha': 3.90},drinks: {'agua': 3.90}});
  });
  it('Verifica se createMenu().consumption retorna um array vazio inicialmente', () => {
    expect(createMenu({food:{}, drinks: {}}).consumption).toEqual([])
  });
  it('Verifica se ao chamar a função order(param) do objeto retornado, a string passada como parametro é adicionada ao array consumption', () => {
    menuEx.order('coxinha');
    expect(menuEx.consumption).toContain('coxinha');
  });
  it('Verifica se ao chamar a função order(param) para três itens, as strings passadas como parametros são adicionadas ao array consumption', () => {
    const menuEx2 = createMenu({food: {'coxinha': 4.90},drinks: {'agua': 3.90}});
    const arrayEx1 = ['coxinha','whiskey','refri'];
    menuEx2.order(arrayEx1[0]);
    menuEx2.order(arrayEx1[1]);
    menuEx2.order(arrayEx1[2]);
    expect(menuEx2.consumption).toContain(arrayEx1[0]);
    expect(menuEx2.consumption).toContain(arrayEx1[1]);
    expect(menuEx2.consumption).toContain(arrayEx1[2]);
  });
  it('Verifica se ao chamar a função order(param) para três itens, as strings passadas como parametros são adicionadas ao array consumption', () => {
    const menuEx3 = createMenu({food: {'coxinha': 4.90},drinks: {'agua': 3.90}});
    const arrayEx2 = ['coxinha','agua'];
    menuEx3.order(arrayEx2[0]);
    menuEx3.order(arrayEx2[1]);;
    expect(menuEx3.pay()).toEqual('8.80');
  });
});
