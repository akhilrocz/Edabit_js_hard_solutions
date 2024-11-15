function isPositiveDominant(arr) {
  let positive_count = 0;
  let negative_count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] !== arr[i + 1]) {
      positive_count += 1;
    } else if (arr[i] < 0 && arr[i] !== arr[i + 1]) {
      negative_count += 1;
    }
  }

  if (positive_count > negative_count) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPositiveDominant([5, 0]);
