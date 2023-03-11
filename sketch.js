function make2DArray(columns, rows) {
  let arr = new Array(columns);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}

let grid;
let WIDTH = 600;
let HEIGHT = 600;
let resolution = 2;

function setup() {
  createCanvas(WIDTH, HEIGHT);
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

  // Next Grid
  let nextGrid = make2DArray(columns, rows);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      let neighbors = nearestNeighbourCount(grid, i, j);

      if (state == 0 && neighbors == 3) {
        nextGrid[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        nextGrid[i][j] = 0;
      } else {
        nextGrid[i][j] = state;
      }
    }
  }

  grid = nextGrid
}

function nearestNeighbourCount(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + columns) % columns;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}
