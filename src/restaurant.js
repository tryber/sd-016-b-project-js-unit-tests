const createMenu = () => {};
/* 
}
 */
const createMenu = (object) => {
  const menu = { fetchMenu: () => object };
  menu.consumption = [];
  menu.order = (request) => menu.consumption.push(request);
  menu.pay = () => {
    const itensConsumption = menu.consumption;
    const menuValues = menu.fetchMenu();
    let payValue = 0;

    for (let index = 0; index < itensConsumption.length; index += 1) {
      if (Object.keys(menuValues.food).includes(itensConsumption[index])) {
        payValue += menuValues.food[itensConsumption[index]];
      }

      if (Object.keys(menuValues.drinks).includes(itensConsumption[index])) {
        payValue += menuValues.drinks[itensConsumption[index]];
      }
    }

    payValue += payValue * 0.1;

    return payValue;
  };
  return menu;
};

const objetoRetornado = createMenu({
  food: { coxinha: 3.90, sanduiche: 9.90 },
  drinks: { agua: 3.90, cerveja: 6.90 },
});
objetoRetornado.order('coxinha');
objetoRetornado.order('agua');
objetoRetornado.order('coxinha');

console.log(objetoRetornado.pay());

module.exports = createMenu;