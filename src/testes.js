// PASSO 1: Crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: 
// { fetchMenu: () => objetoPassadoPorParametro }.
// const objeto = {
//     food: {
//       coxinha: 3.9,
//       sopa: 9.9,
//     },
//     drink: {
//       agua: 3.9,
//       cerveja: 6.9,
//     },
//   }; 

// Objeto neste caso cardápio
const restaurante = {
    food: {
        coxinha: 3.9,
        sopa: 9.9,
    },
    drink: {
        agua: 3.9,
        cerveja: 6.9,
    },
};

const createMenu = (obejctParameter) => {
    obejctParameter.fetchMenu = () => obejctParameter;
    return obejctParameter;
};
console.log(' *********************************** ');
// console.log(`Retornando o Objeto Passado Por Parâmetro: ${createMenu(restaurante)}`);
// console.log(`Objeto Passado Por Parâmetro na Chave fetchMenu: ${createMenu(restaurante)}`);
const receiveKeys = Object.keys(createMenu(restaurante));
console.log(`Chaves: ${receiveKeys}`); // Retorno das Chaves: food,drink,fetchMenu
const returnValues = Object.values();
console.log(`Values: ${returnValues}`);
console.log(' *********************************** ');