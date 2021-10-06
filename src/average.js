const isOnlyNbrs = (arr) => {
  let result = true;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      result = false;
      break;
    }
  }
  return result;
};

console.log(isOnlyNbrs([3, 2, 5, 3]));

const average = (arr) => {
  let total = 0;
  if (arr.length !== 0 && isOnlyNbrs(arr)) {
    for (let i = 0; i < arr.length; i += 1) {
      total += arr[i];
    }
    return Math.round(total / arr.length);
  }
  return undefined;
};

// console.log(average([1, 2, 3]));
module.exports = average;