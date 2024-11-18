function doesBrickFit(a, b, c, w, h) {
  return (
    (a <= w && b <= h) ||
    (a <= h && b <= w) ||
    (b <= w && a <= h) ||
    (b <= h && a <= w) ||
    (c <= w && a <= h) ||
    (c <= h && a <= w)
  );
}
console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));

console.log(doesBrickFit(1, 2, 2, 1, 1));
