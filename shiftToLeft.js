function shiftToLeft(n, m) {
  if (m == 0) return n;  // if no of shifts is zero return original number
  return shiftToLeft(n * 2, m - 1);  //recursive call
}

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(12, 4));
console.log(shiftToLeft(46, 6));
