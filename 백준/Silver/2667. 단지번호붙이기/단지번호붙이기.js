const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const grid = input.slice(1).map(row => row.split('').map(Number));

const bfs = (x, y) => {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [[x, y]];
    grid[x][y] = 0;
    let count = 1;

    while (queue.length) {
        const [cx, cy] = queue.shift();

        directions.forEach(([dx, dy]) => {
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && grid[nx][ny] === 1) {
                grid[nx][ny] = 0;
                queue.push([nx, ny]);
                count++;
            }
        });
    }

    return count;
};

const results = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (grid[i][j] === 1) {
            results.push(bfs(i, j));
        }
    }
}

console.log(results.length);
console.log(results.sort((a, b) => a - b).join('\n'));
