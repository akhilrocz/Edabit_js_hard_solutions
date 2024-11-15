
function numInStr(arr){
console.log(arr.filter(str => /\d/.test(str)))   //        /\d/ used to test if strings contain number 
}
numInStr(["abc", "abc10"]);