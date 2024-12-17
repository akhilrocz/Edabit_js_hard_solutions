function isDisarium(num) {
  let numInString = num.toString();
  let sum = 0;
  for (let i = 0; i < numInString.length; i++) {
    sum += numInString[i] ** (i + 1);
  }
return sum==num;
}

console.log(isDisarium(75));
console.log(isDisarium(135));
console.log(isDisarium(544));
console.log(isDisarium(518));
console.log(isDisarium(8));
console.log(isDisarium(466));
