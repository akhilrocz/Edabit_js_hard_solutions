function lcm(x, y) {
  function gcd(x, y) {
    return y == 0 ? x : gcd(y, x % y);
  }
  return (x * y) / gcd(x, y);
}

console.log(lcm(9, 18));
console.log(lcm(8, 5));
console.log(lcm(17, 11));
