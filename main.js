// problem 1

// let n = "10011011";
// let a = 2;

// function parseDecimal(x, y){
//     x
// };



// problem 2

//   let newArr = [1, -3, 12, -1, 3, -4, -2, 1, -7];
// let a = true;
// if(newArr[0] < 0){
//   for(let i = 0; i < newArr.length; i++){
//     if(i % 2 == 0 && newArr[i] > 0){
//       a = i;
//       break
//     } else if(i % 2 != 0 && newArr[i] < 0){
//       a = i;
//       break;
//     }
//   }
// } else{
//   for(let i = 0; i < newArr.length; i++){
//     if(i % 2 == 0 && newArr[i] < 0){
//       a = i;
//       break
//     } else if(i % 2 != 0 && newArr[i] > 0){
//       a = i;
//       break;
//     }
//   }
// }
// console.log(a);


// problem 3

// let Object = {
//   array: [15, 20, 12, 4, -13, 5],
//   at(index) {
//     if (this.array.length > 0) {
//       if (index >= 0) {
//         for (let i = 0; i < this.array.length; i++) {
//           if (i == index) {
//             console.log(this.array[i]);
//           }
//         }
//       } else {
//         for (let i = 0; i < this.array.length; i++) {
//           if (i == Math.abs(index)) {
//             console.log(this.array.reverse()[Math.abs(i)-1]);
//           }
//         }
//       }
//     }
//   },
// };
// Object.at(-2);




// problem 8 

// const arr = [
//     [1, 1, 1, 1],
//     [5, 2, 2, 100],
//     [9, 4, 2, 1],
//   ];
  

  
//   const newFunx = function (arr, i, j, res = []) {
//     res[res.length] = [i, j];
//     const left = arr[i][j - 1];
//     const top = arr[i - 1]?.[j];
  
//     if (top !== undefined && left !== undefined) {
//       if (left > top) {
//         newFunx(arr, i - 1, j, res);
//       } else newFunx(arr, i, j - 1, res);
//     }
  
//     if (top !== undefined && left === undefined) {
//         newFunx(arr, i - 1, j, res);
//     }
  
//     if (top === undefined && left !== undefined) {
//         newFunx(arr, i, j - 1, res);
//     }
//     return res;
//   };
//   const newArrfun = function (table, i, j) {
//     const top = table[i - 1]?.[j];
//     const left = table[i][j - 1];
//     let sum = 0;
  
//     if (top !== undefined && left !== undefined) {
//       sum += top > left ? left : top;
//     }
//     if (top !== undefined && left === undefined) {
//       sum = table[i - 1][j];
//     }
  
//     if (top === undefined && left !== undefined) {
//       sum = table[i][j - 1];
//     }
//     return sum;
//   };
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] += newArrfun(arr, i, j);
//     }
//   }
  
//   const res = newFunx(arr, arr.length - 1, arr[0].length - 1);
//   console.log(res.reverse());



// problem 4

