const vqv = () => {};
const vqv = (name, age) => {
  let msg;
  if (name === undefined || age === undefined) {
    msg = undefined;
  } else {
    msg = (`Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`);
  }
  return msg;
};

module.exports = vqv;