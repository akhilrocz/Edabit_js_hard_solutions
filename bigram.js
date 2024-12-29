function canFind(arr1, arr2) {
  if (arr2.length === 0) return false;
  const sentence = arr2.join(" ");
  return arr1.every((bi) => sentence.includes(bi));
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(
  canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])
);
console.log(
  canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])
);
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));
