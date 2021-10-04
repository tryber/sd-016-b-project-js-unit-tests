const createMenu = () => {};
const createMenu = (objeto) => { 
  let menuRestaurant = {};
  let orderMenu = (request) => menuRestaurant.consumption.push(request);

  menuRestaurant.fetchMenu = () => objeto;
  menuRestaurant.consumption = [];
  menuRestaurant.order = orderMenu;
  menuRestaurant.pay = () => {
    let totalToPay = 0;
    for (let index of menuRestaurant.consumption) {
          if (objeto.food[index] !== undefined) {
            totalToPay += objeto.food[index];
      }
          if (objeto.drink[index] !== undefined) {
            totalToPay += objeto.drink[index];
    }
  }
  return totalToPay * 1.1;
};
  return menuRestaurant;
};

module.exports = createMenu;
