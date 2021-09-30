let menu = {};

const Ordered = (str) => {
  menu.consumption.push(str);
};
// o conceito do map é novo para mim, sei que ele passa por cada elemento dentro de um array. 
// usei esse video como referência: https://www.youtube.com/watch?v=djiHm61y8P4.
// basicamente o que fiz aqui foi rodar ele para cada elemento do consumption que é um array gerado pela função Ordered. 
// PriceTable se torna um objeto unico ao enves dos dois objetos assim posso rodar um for nele, 
// comparar sua chave com o pedido feito no consumption e pegar seu valor;

const debt = () => {
  const priceTable = Object.assign(menu.fetchMenu().food, menu.fetchMenu().drinks);
  let bill = 0;
  menu.consumption.map((pedido) => {
  for (let i in priceTable) {
    if (i === pedido) {
      bill += priceTable[i];
    }
  }
  return bill;
});
return bill;
};

const createMenu = (object) => {
  menu = { 
    fetchMenu: () => object,
    consumption: [],
    order: Ordered,
    pay: debt,
  };
  return menu;
};
console.log(createMenu({ food: {}, drink: {} }));
module.exports = createMenu;

const objetoRetornado = createMenu({ food: {}, drink: {} });
console.log(objetoRetornado.order());
