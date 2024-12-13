function consecutiveCombo(arr1, arr2) {
  let combinedArr = [...arr1, ...arr2];
  combinedArr.sort((a, b) => a - b);
  for (let i = 1; i < combinedArr.length; i++) {
    if (combinedArr[i] - combinedArr[i - 1] !== 1) {
      return false;
    }
  }
  return true;
}

console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6]));
console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]));
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]));
console.log(consecutiveCombo([44, 46], [45]));
