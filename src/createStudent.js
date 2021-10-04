const createStudent = () => {};
const createStudent = (inputName) => {
  let nameFeedback = { name: '' };
  nameFeedback.name = inputName;
  nameFeedback.feedback = () => 'Eita pessoa boa!';
  return nameFeedback;
};

module.exports = createStudent;