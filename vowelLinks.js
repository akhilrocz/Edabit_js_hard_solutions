function vowelLinks(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const words = str.split(" ");
  for (let i = 0; i < words.length - 1; i++) {
    const currWord = words[i];
    const nextWord = words[i + 1];
    if (vowels.has(currWord[currWord.length - 1]) && vowels.has(nextWord[0])) {
      return true;
    }
  }
  return false;
}

console.log(vowelLinks("a very large appliance"));
console.log(vowelLinks("go to edabit"));
console.log(vowelLinks("an open fire"));
console.log(vowelLinks("a sudden applause"));
