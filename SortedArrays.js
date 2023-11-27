const input = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

function sort(input) {
  let min = 0;
  let max = 10;
  let count = 0;
  let output = [];

  for (let i = min; i < max; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input[j].length; k++) {
        if (i == input[j][k]) {
          count++;
        }
      }
    }

    if (count != 0);
    {
      for (let l = 0; l < count; l++) {
        output.push(i);
      }
      count = 0;
    }
  }

  return output;
}

console.log(sort(input));
//output :  [1,  1,  2,  3,  4,  4,  5,  6]