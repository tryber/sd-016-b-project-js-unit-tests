const createStudent = () => {};



const createStudent = (nome) => ({
  name: nome,
  feedback: () => 'Eita pessoa boa!',
});

console.log(createStudent('naty'));
module.exports = createStudent;