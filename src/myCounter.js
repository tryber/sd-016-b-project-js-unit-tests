const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
  let myArray = [];
  for (let k = 0; k <= 3; k += 1) {
    myArray.push(k);
    for (let j = 2; j <= 3; j += 1) {
      myArray.push(j);
    }
  }
return myArray;
};
mmodule.exports = myCounter;