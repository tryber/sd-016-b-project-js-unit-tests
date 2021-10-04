const acordando = () => 'Acordando';
const cafe = () => 'Bora tomar um café';
const dormir = () => 'Partiu dormir';

const doingThings = (callback) => console.log(callback());

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);