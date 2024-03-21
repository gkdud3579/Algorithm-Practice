const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [N, M, R] = input.shift().split(' ').map(Number);
  const matrix = input.map(row => row.split(' ').map(Number));
  
  for (let layer = 0; layer < Math.min(N, M) / 2; layer++) {
    // Calculate the total number of elements in the current layer
    const totalElements = 2 * (N + M - 2 - 4 * layer);
    const actualRotations = R % totalElements;

    for (let r = 0; r < actualRotations; r++) {
      rotateLayer(matrix, layer, N, M);
    }
  }

  matrix.forEach(row => console.log(row.join(' ')));
});

function rotateLayer(matrix, layer, N, M) {
  const temp = matrix[layer][layer];

  for (let i = layer; i < M - layer - 1; i++) matrix[layer][i] = matrix[layer][i + 1];
  for (let i = layer; i < N - layer - 1; i++) matrix[i][M - layer - 1] = matrix[i + 1][M - layer - 1];
  for (let i = M - layer - 1; i > layer; i--) matrix[N - layer - 1][i] = matrix[N - layer - 1][i - 1];
  for (let i = N - layer - 1; i > layer + 1; i--) matrix[i][layer] = matrix[i - 1][layer];

  matrix[layer + 1][layer] = temp;
}
