function insertWhitespace(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += s[i];
    if (
      s.charAt(i) === s.charAt(i).toLowerCase() &&
      s.charAt(i + 1) === s.charAt(i + 1).toUpperCase()
    ) {
      res += " ";
    }
  }
  return res;
}

console.log(insertWhitespace("SheWalksToTheBeach"));
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));
