const createStudent = (nome) => {
  let obj = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  };
  return obj;
};

module.exports = createStudent;