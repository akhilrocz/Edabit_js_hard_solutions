function sockMerchant(arr) {
  let count = 0;
  if (arr.length === 0) {
    console.log(0);
    return;
  }

  const map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    count += Math.floor(value / 2);
  }

  console.log(count);
}

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]);

sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]);

sockMerchant([]);
