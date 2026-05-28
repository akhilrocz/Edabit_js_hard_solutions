function calculateBoomerags(arr){
    let count=0;

    for(let i=0;i<arr.length-2;i++){
        if(arr[i]===arr[i+2] && arr[i]!==arr[i+1]){
            count++;
        }
    }

    console.log(count);
}

calculateBoomerags([9, 5, 9, 5, 1, 1, 1])
calculateBoomerags([5, 6, 6, 7, 6, 3, 9])
calculateBoomerags([4, 4, 4, 9, 9, 9, 9])