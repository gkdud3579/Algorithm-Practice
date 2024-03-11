const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = parseInt(input[0]);
  const A = input[1].split(' ').map(Number);
  console.log(solve(N, A));
  process.exit();
});

function solve(N, A) {
  let maxSum = 0;
  generatePermutations(A, 0, N, (perm) => {
    const sum = calculateSum(perm);
    maxSum = Math.max(maxSum, sum);
  });
  return maxSum;
}

function generatePermutations(arr, start, end, callback) {
  if (start === end) {
    callback(arr.slice());
    return;
  }
  for (let i = start; i < end; i++) {
    [arr[start], arr[i]] = [arr[i], arr[start]];
    generatePermutations(arr, start + 1, end, callback);
    [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack
  }
}

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}
