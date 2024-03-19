const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, M] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);
  const visited = Array(N).fill(false);
  const result = [];

  function dfs(depth, sequence = []) {
    if (depth === M) {
      result.push(sequence.join(' '));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(depth + 1, [...sequence, numbers[i]]);
        visited[i] = false; // 백트래킹
      }
    }
  }

  dfs(0);
  console.log(result.join('\n'));
  process.exit();
});
