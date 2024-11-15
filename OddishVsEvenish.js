function oddishOrEvenish(n) {
  let sum = 0;

  let r;
  while (n > 0) {
    r = n % 10;
    sum = sum + r;
    n = Math.floor(n / 10); // or use parseInt to convert floating point number to integer
  }
  if (sum % 2 == 0) {
    console.log("Evenish");
  } else {
    console.log("Oddish");
  }
}
oddishOrEvenish(4433);
