let res =1;
function combinations(...nums){  //rest parameter
  for(let i=0;i<nums.length;i++){
    res*=nums[i]
  }
  console.log(res)
}
combinations(3, 7, 4)