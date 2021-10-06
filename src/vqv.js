const vqv = (name, number) => {
  if (name === undefined && number === undefined) return undefined;
  return `Oi, meu nome é ${name}!
Tenho ${number} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;