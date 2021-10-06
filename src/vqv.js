const vqv = (nome, idade) => {
  if (nome !== undefined && idade !== undefined) {
    const str = `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
    return str;
  }
  return undefined;
};

module.exports = vqv;