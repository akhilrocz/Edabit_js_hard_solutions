function findBrokenKeys(str1, str2) {
  let res = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i] && !res.includes(str1[i])) {
      res.push(str1[i]);
    }
  }
  return res;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
