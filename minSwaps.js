
function minSwaps(s1,s2){
    let cnt=0;
    for(let i=0;i<s1.length;i++){
       if(s1[i]!=s2[i]){
        cnt++;
       }
    }
    console.log(Math.ceil(cnt/2));  //handling odd counts we need extra one swap

}

minSwaps("1100", "1001") 
minSwaps("110011", "010111")
minSwaps("10011001", "01100110")