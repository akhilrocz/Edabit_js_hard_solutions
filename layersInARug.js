function countLayers(rug) {
  let layers = 0;
  let top = 0,
    bottom = rug.length - 1;

  while (top <= bottom) {
    if (rug[top] === rug[bottom]) {
      layers++;
      top++;
      bottom--;
    } else {
      break;
    }
  }

  return layers;
}
console.log(countLayers(["AAAA", "ABBA", "AAAA"]));

console.log(
  countLayers(["AAAAAAAAA", "ABBBBBBBA", "ABBAAABBA", "ABBBBBBBA", "AAAAAAAAA"])
);

console.log(
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA",
  ])
);
