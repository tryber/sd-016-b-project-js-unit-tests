

const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};
console.log(myCounter());

module.exports = myCounter;
