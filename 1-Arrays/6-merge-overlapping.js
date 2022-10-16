function mergeOverlapping(arr) {
  const resultArr = [];
  arr.forEach((item, index) => {
    let [start, end] = arr[index + 1];
    if (item[1] > nextArr?.[0]) {
      resultArr.push([item[0], end]);
    } else {
      resultArr.push(item);
    }
    return resultArr;
  });
}
mergeOverlapping([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
