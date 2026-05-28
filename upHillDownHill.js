function aveSpd(upHillTime,upHillRate, downHillRate){
    let distance = upHillRate*upHillTime;
   
    let downHillTime = distance/downHillRate;

    let totalTime = upHillTime+downHillTime;

    let averageSpeed = distance*2/totalTime;

    console.log(averageSpeed)
}

aveSpd(18,20,60);

aveSpd(30, 10, 30)

aveSpd(30, 8, 24)