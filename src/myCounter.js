/* eslint-disable space-before-blocks */
/* eslint-disable brace-style */
/* eslint-disable no-shadow */
const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
  // eslint-disable-next-line block-spacing
  // eslint-disable-next-line brace-style
  // eslint-disable-next-line block-spacing
  let myArray = [];}
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
   for (let counter2 = 2; counter2 <= 3; counter2 += 1){
      myArray.push(counter2);
    }
  }
  return myArray;
};
module.exports = myCounter;