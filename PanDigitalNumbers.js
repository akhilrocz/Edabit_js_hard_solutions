function isPandigital(num) {
  const numString = num.toString();
  const set = new Set();
  for (const digit of numString) {
    set.add(digit);
  }

  return set.size === 10;
}
console.log(isPandigital(98140723568910));

console.log(isPandigital(90864523148909));
