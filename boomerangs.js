let count = 0;
function countBoomerangs(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == arr[i + 2] &&
      arr[i + 1] !== arr[i] &&
      arr[i + 1] !== arr[i + 2]
    ) {
      count++;
    }
  }
  console.log(count);
}
countBoomerangs([4, 4, 4, 9, 9, 9, 9]);
