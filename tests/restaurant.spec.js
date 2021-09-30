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
  const foodDrink = { food: {}, drink: {} };
  var objetoRetornado = createMenu({ food: {}, drink: {} });

  it('TESTE 1: Verific se createMenu() retonra um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
    expect(typeof (createMenu().fetchMenu)).toEqual('function');});

  it('TESTE 2: Verifica se objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente food e drink, considerando o parametro objetoRetornado', () => {
    expect(Object.keys(objetoRetornado.fetchMenu())).toEqual(['food', 'drink']);
});

  it('TESTE 3: Verifica se o menu passado para a função é o mesmo recuperado pela função objetoRetornado.fetchmenu()', () => {
    expect(objetoRetornado.fetchMenu()).toEqual(foodDrink);
  });

  it ('TESTE 4: Verifica se o objetoRetornado.Consumption, após a criação do meno retonra um array vazio', () => {
    expect(objetoRetornado.consumption).toEqual([]);
  })
  
  it ('Teste 5: verifica se, ao chamar a funçao associada a chave order no objeto retornado passando a string "coxinha" como parametro, tal string retorna no objeto retornado.consumption', () => {
    const objetoRetornado = createMenu({});
    objetoRetornado.order("coxinha");
    objetoRetornado.consumption;
    expect(objetoRetornado.consumption).toEqual(['coxinha']);
  });

  it('TESTE 6: Verifca se ao adicionar mais três itens, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const objetoRetornado = createMenu({});
      // objetoRetornado.order(['coxinha', 'amendoim', 'nozinho', 'cerveja']);
      //Lembrei que é para adicionar strings no array, nao array no array;
    objetoRetornado.order("coxinha");
    objetoRetornado.order("amendoim");
    objetoRetornado.order("nozinho");
    objetoRetornado.order("cerveja");
    objetoRetornado.consumption;
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'amendoim', 'nozinho', 'cerveja']); 
    });
    it('TESTE 7: Verifca se ao adicionar mais três itens, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
      const objetoRetornado = createMenu({});
      objetoRetornado.order("coxinha");
      objetoRetornado.order("coxinha");
      objetoRetornado.consumption;
      expect(objetoRetornado.consumption).toEqual(['coxinha', 'coxinha']); 
      });

    it('Teste 8: verifica se ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido', () => {
  const objetoRetornado = createMenu({
    food: {coxinha: 7.00, nozinho: 2.00},
    drinks:{cerveja: 9.0, agua: 4.00},
  });
  objetoRetornado.order('coxinha');
  objetoRetornado.order('coxinha');
  objetoRetornado.order('cerveja');
  expect(objetoRetornado.pay()).toBe(23.00)
  })
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
