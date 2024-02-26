const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', function(line) {
  inputLines.push(line);
}).on('close', function() {
  const [N, M] = inputLines[0].split(' ').map(Number);
  const cards = inputLines[1].split(' ').map(Number);
  console.log(findClosestSum(N, M, cards));
  process.exit();
});

function findClosestSum(N, M, cards) {
  let closestSum = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum > closestSum && sum <= M) {
          closestSum = sum;
        }
      }
    }
  }
  return closestSum;
}
