function invert(input) {
  const arr = [];
  for (let i = input.length - 1; i >= 0; i--) {
    const char = input[i];
    const invertedChar =
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    arr.push(invertedChar);
  }
  return arr.join("");
}
console.log(invert("dLROW YM sI HsEt"));

console.log(invert("ytInIUgAsnOc"));

console.log(invert("step on NO PETS"));

console.log(invert("XeLPMoC YTiReTXeD"));
