const arr = [9, 1, 9];

function sort(arr) {
  let isSorted = false;
  let i = 0;

  while (!isSorted) {
    isSorted = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
    }
    console.log(arr);

    i++;
  }

  return arr;
}

sort(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
