function getFrequencies(arr) {
  let frequencyObj = {};
  for (let i = 0; i < arr.length; i++) {
    frequencyObj[arr[i]] = (frequencyObj[arr[i]] || 0) + 1;
  }
  return frequencyObj;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
