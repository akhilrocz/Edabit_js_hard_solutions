function aveSpd(uphillTime, uphillRate, downHillRate) {
  uphillTime = uphillTime / 60;

  let uphillDistance = uphillTime * uphillRate;

  let downHillTime = uphillDistance / downHillRate;

  //  downHillTime = downHillTime / 60;

  let totalDistance = 2 * uphillDistance;

  let averageSpeed = totalDistance / (uphillTime + downHillTime);
  return Math.floor(averageSpeed);
}

console.log(aveSpd(18, 20, 60));
console.log(aveSpd(30, 10, 30));
console.log(aveSpd(30, 8, 24));
