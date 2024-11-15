function valueInTree(arr1, n) {
  
    if(!arr1 || arr1.length===0 ){
        return false;
    }
    if(arr1[0]==n)
    {
        return true;
    }
    const leftSubtree = arr1[1]
    const rightSubTree = arr1[2];
    return valueInTree(leftSubtree,n) || valueInTree(rightSubTree,n)
}

console.log(valueInTree([3, [8, [5, null, null], null], [7, null, null]], 5));
