describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    fail('Teste vazio!');
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a
    // chave fetchMenu, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    // ```
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {});

    it('TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
    expect(createMenu).toBeInstanceOf(Object);
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(createMenu().fetchMenu).toBeInstanceOf(Function);

    // const objetoRetornado = createMenu(); 
    // Retorno: { fetchMenu: () => {}, ... }
    });
    // ```
    it('TESTE 2: Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.', () => {
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    // TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    expect(Object.keys(createMenu({food: {}, drink:{}}).fetchMenu())).toEqual([ 'food', 'drink' ]);
    });
    it('TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função "objetoRetornado.fetchMenu"', () => {
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```

    expect(createMenu( {food: {}, drink:{}} ).fetchMenu()).toEqual( {food: {}, drink:{} });
    });
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    it('TESTE 4: Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    expect(createMenu( {food: {}, drink:{}} ).consumption).toEqual([]);
    });
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    it('TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,', () => {
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    const menu = createMenu( {food: {}, drink:{}} );
    menu.order('coxinha');
    expect(menu.consumption).toEqual(['coxinha']);
    });
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    it('TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    const menu = createMenu( {food: {}, drink:{}} );
    menu.order('coxinha');
    menu.order('agua');
    menu.order('sopa');
    menu.order('sashimi');
    expect(menu.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
    });
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    it('TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.consumption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    const menu = createMenu( {food: {}, drink:{}} );
    menu.order('coxinha');
    menu.order('agua');
    menu.order('sopa');
    menu.order('agua');
    expect(menu.consumption).toEqual(['coxinha', 'agua', 'sopa', 'agua']);
    });
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    it('TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    const menu = createMenu( {
      food: {
        coxinha: 5.00,
        sopa: 10.00,
      }, 
      drink:{
        agua: 2.00,
        suco: 4.00,
      }
    });
    menu.order('coxinha');
    menu.order('sopa');
    menu.order('agua');

    expect(menu.pay()).toBeCloseTo(18.70);
    });

  // });
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });

});