function getDays(x,y){
    let diff = Math.abs(y-x);  //milli seconds
    return diff/(1000*60*60*24);  //days
}


console.log(getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
  ));