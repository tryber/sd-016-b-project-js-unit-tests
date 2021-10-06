const average = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    const type = typeof arr[index];
    if (type !== 'number') {
      return undefined;
    } sum += arr[index];
  }
    let media = sum / arr.length;
    media = Math.round(media);
    return media;
};
module.exports = average;