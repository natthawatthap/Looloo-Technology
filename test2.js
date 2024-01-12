const input = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

let output = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    output.push(input[i][j]);
  }
}

let done = false;
let index = 0;

while (!done) {
  done = true;
  for (let j = 0; j < output.length - 1 - index; j++) {
    if (output[j] > output[j + 1]) {
      let temp = output[j];
      output[j] = output[j + 1];
      output[j + 1] = temp;
      done = false;
    }
  }

  index++;
}

console.log(output);
