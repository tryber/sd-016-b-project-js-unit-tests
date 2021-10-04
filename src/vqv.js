const vqv = () => {};
const vqv = (name, age) => {
  if (typeof name !== 'string' || typeof age !== 'number') {
    return undefined;
  }

  let phrase = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

  return phrase;
};
module.exports = vqv;
