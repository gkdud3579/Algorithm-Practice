const fs = require('fs');
let [N, M, R, ...edges] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
const order = Array.from({ length: N + 1 }, () => 0);
let visitOrder = 1;

for (let i = 0; i < edges.length; i += 2) {
  const u = edges[i];
  const v = edges[i + 1];
  graph[u].push(v);
  graph[v].push(u);
}

graph.forEach((g) => g.sort((a, b) => a - b));

function dfs(node) {
  visited[node] = true;
  order[node] = visitOrder++;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(R);

console.log(order.slice(1).join('\n'));
