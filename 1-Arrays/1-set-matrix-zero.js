/**
 * Set Matrix Zero
 * 
Problem Statement: 
Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and 
then return the matrix.

Examples:

Examples 1:

Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

Output: [[1,0,1],[0,0,0],[1,0,1]]

Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0
*/

// (function setMatrixZero(arr) {
//   const result = arr.map((item, index) => {
//     console.log(item);
//   });
// })([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]);

function setMatrixZero(arr) {
  const zeroIndices = [];
  arr.forEach((item, index) => {
    item.forEach((i, k) => {
      if (i === 0) {
        zeroIndices.push([index, k]);
      }
    });
  });

  let rows = arr.length;
  let columns = arr[0].length;

  console.log(zeroIndices);
}
// [[1,1,1],[1,0,1],[1,1,1]] , 1, 0
function transformZero(arr, x, y) {
  for (let i = 0; i < arr.length; i++) {
    if (i === x) {
      // change all array items to 0
      arr[i] = 0;
    }
    // for(let j=0;j<arr[0].length;j++){

    // }
  }
}

setMatrixZero([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
]);
