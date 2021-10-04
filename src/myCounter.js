const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};

console.log(myCounter());

module.exports = myCounter;