function mergeSortedArr(arr1, arr2) {
  let newArr = [];
  let i = 0; //1
  let j = 0; //0
  while (i < arr1.length && j < arr2.length) {
    //T
    // if arr1[0] < arr2[0], then push arr[0] to newArr
    if (arr1[i] < arr2[j]) {
      //T
      newArr.push(arr1[i]); //1
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  //   console.log(i, j);
  while (i < arr1.length) {
    //     //   if(i != arr1.length){
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

let res = mergeSortedArr([1, 4, 8, 10], [2, 3, 9]);
console.log(res);
