const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = 0;
const paper = [];
let white = 0, blue = 0;

function countPaper(x, y, size) {
  let color = paper[x][y];
  let isUniform = true;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== color) {
        isUniform = false;
        break;
      }
    }
    if (!isUniform) break;
  }

  if (isUniform) {
    color === 1 ? blue++ : white++;
  } else {
    const newSize = size / 2;
    countPaper(x, y, newSize);
    countPaper(x, y + newSize, newSize);
    countPaper(x + newSize, y, newSize);
    countPaper(x + newSize, y + newSize, newSize);
  }
}

rl.on('line', (line) => {
  if (N === 0) {
    N = parseInt(line);
  } else {
    paper.push(line.split(' ').map(Number));
    if (paper.length === N) {
      rl.close();
    }
  }
}).on('close', () => {
  countPaper(0, 0, N);
  console.log(white);
  console.log(blue);
  process.exit();
});
