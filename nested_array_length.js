function getLength(arr) {
  const flatArr = arr.flat(Infinity);  //converts to normal array  //flattens array to single level
  console.log(flatArr.length);
}
getLength([1, [2, [3, [4, [5, 6]]]]]);
