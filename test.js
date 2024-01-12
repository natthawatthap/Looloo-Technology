const input = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 60000],
];

let count = 0;
let buff = [];
let output = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    for (let k = 0; k < buff.length; k++) {
      if(buff[k] != input[i][j]){
        buff.push(input[i][j])
      }else{

      }
      console.log(buff);
    }
  }
}

// console.log(buff);

// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input[i].length; j++) {
//     if(buff)
//   }
// }

// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input[i].length; j++) {
//     console.log(count);
//     count[input[i][j]]++;
//   }
// }

//output :  [1,  1,  2,  3,  4,  4,  5,  6]
