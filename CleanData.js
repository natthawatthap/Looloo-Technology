const input_data = [
  ["toyota", "vios", 1234],
  ["isuzu", "d max", 798],
  ["honda", "crv", 332],
  ["isuzu", "h/l", 7553],
  ["toyota", "vios", 31977],
];

const car_map = {
  toyota: { vios: ["vios"], camry: ["camry"] },
  honda: { civic: ["civic", "cvc"], "cr-v": ["crv", "cr-v", "cr v"] },
  isuzu: {
    "d-max": ["dmax", "d max", "d-max"],
    "hi-lander": ["hl", "hi-lander", "hilander", "h/l"],
  },
  bmw: {},
};

function clean_car_data(input_data, car_map) {
  let output = [];

  for (let i = 0; i < input_data.length; i++) {
    let brand = car_map[input_data[i][0]];
    let cleanModel = "";
    for (const model in brand) {

      for (let j = 0; j < brand[model].length; j++) {
        if (brand[model][j] == input_data[i][1]) {
          cleanModel = model;
        }
      }
    }

    output.push([input_data[i][0], cleanModel, input_data[i][2]]);
  }
  return output;
}

console.log(clean_car_data(input_data, car_map));
// [['toyota', 'vios', 1234], ['isuzu', 'd-max', 798], ['honda', 'cr-v', 332],
//  ['isuzu', 'hi-lander', 7553], ['toyota', 'vios', 31977], ...]
