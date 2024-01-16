const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numComputers = Number(input[0]);
const numConnections = Number(input[1]);
const connections = input.slice(2).map(line => line.split(' ').map(Number));

// 그래프 생성 (인접 리스트)
const graph = Array.from({ length: numComputers + 1 }, () => []);
connections.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});

function bfs(start) {
    const visited = Array(numComputers + 1).fill(false);
    const queue = [start];
    visited[start] = true;

    let count = 0;
    while (queue.length) {
        const node = queue.shift();
        graph[node].forEach(neighbor => {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
                count++;
            }
        });
    }
    return count;
}

console.log(bfs(1));
