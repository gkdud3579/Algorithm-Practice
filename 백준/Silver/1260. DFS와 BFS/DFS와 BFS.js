const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [N, M, V] = lines[0].split(' ').map(Number);
  const graph = Array.from(Array(N + 1), () => []);

  for (let i = 1; i <= M; i++) {
    const [a, b] = lines[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visitedDFS = Array(N + 1).fill(false);
  dfs(graph, V, visitedDFS);
  console.log();

  const visitedBFS = Array(N + 1).fill(false);
  bfs(graph, V, visitedBFS);

  process.exit();
});

function dfs(graph, v, visited) {
  visited[v] = true;
  process.stdout.write(`${v} `);
  graph[v].sort((a, b) => a - b).forEach((node) => {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  });
}

function bfs(graph, start, visited) {
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const v = queue.shift();
    process.stdout.write(`${v} `);

    graph[v].sort((a, b) => a - b).forEach((node) => {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = true;
      }
    });
  }
}
