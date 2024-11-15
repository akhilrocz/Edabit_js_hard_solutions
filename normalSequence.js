function normalSequence(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  let prev1 = 0;
  let prev2 = 1;
  let current;

  for (let i = 3; i <= n; i++) {
    current = (prev1 + prev2) % 3;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}
console.log(normalSequence(20));
