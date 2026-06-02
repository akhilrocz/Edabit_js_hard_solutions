function simplePair(arr, n) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
     if(arr[i]*arr[j]===n){
         res.push(arr[i], arr[j]);
     }
  }
}

  console.log(res)
}

simplePair([1, 2, 3], 3);

simplePair([1, 2, 3], 6);

simplePair([1, 2, 3], 9);
