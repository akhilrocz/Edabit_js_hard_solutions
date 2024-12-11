function isOdd(n) {
  return (n & 1) === 1 ? "Yes" : "No";  //least significant num is 1
}
function isEven(str) {
  const regex = /^-?\d*[02468]$/;
  return regex.test(str) ? "Yes" : "No";
}
console.log(isOdd(3));
console.log(isOdd(58));

console.log(isEven("0"));
console.log(isEven("-99"));
