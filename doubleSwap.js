function doubleSwap(s1, c1, c2) {
  return s1
    .replace(new RegExp(c1, "g"), "temp")
    .replace(new RegExp(c2, "g"), c1)
    .replace(/temp/g, c2);
}

console.log(doubleSwap("aabbccc", "a", "b"));
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
console.log(doubleSwap("128 895 556 788 999", "8", "9"));
