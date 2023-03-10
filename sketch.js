function make2DArray(columns, rows) {
  let arr = new Array(columns);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}

let grid;
let width = 400;
let height = 400;
let resolution = 40 ;

function setup() {
  createCanvas(400, 400);
  columns = width / resolution;
  rows = height / resolution;
  grid = make2DArray(columns, rows);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }
  console.table(grid); //Validate Grids
}

function draw() {
  background(0);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let w = width;
      let h = height;
      let x = i * resolution;
      let y = j * resolution;

      if (grid[i][j] == 1) {
        fill(255);
        rect(x, y, resolution, resolution);
      }
    }
  }
}
