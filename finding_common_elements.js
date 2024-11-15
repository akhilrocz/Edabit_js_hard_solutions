function commonElements(arr1, arr2) {
  const set = new Set(arr1); //used set for efficient lookups, 0(n) time complexity
  let newArr = []; //0(m) time complexity (i.e strores m elements)

  for (let element of arr2) {
    if (set.has(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));

//overall time complexity 0(n+m)
