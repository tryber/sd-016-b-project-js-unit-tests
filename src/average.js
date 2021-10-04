const average = () => {};
const average = (arr) => {
  let sum = 0;
  let averegeArr = 0;
  let averegeFinal = 0;  
    if (arr.length === 0) {
      return undefined;
    }
    for (let index = 0; index < arr.length; index += 1) {
      if (typeof (arr[index]) !== 'number') {
        return undefined;
      }
      sum += arr[index];
    }
    averegeArr = sum / arr.length;
    averegeFinal = Math.round(averegeArr);
    return averegeFinal;
  };

module.exports = average;
