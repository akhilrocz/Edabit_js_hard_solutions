function reversedBinaryInteger(decimalNum) {
  if (decimalNum === 0) return "0";
  let binaryNum = decimalNum.toString(2);
  let reversedBinNum = binaryNum.split("").reverse().join("");
  return reversedBinNum;
}
console.log(reversedBinaryInteger(10));
console.log(reversedBinaryInteger(12));
console.log(reversedBinaryInteger(25));
console.log(reversedBinaryInteger(45));
