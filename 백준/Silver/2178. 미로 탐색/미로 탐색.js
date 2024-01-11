function bfs(maze, N, M) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [[0, 0]];

    while (queue.length) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || nx >= N || ny < 0 || ny >= M || maze[nx][ny] !== 1) continue;

            maze[nx][ny] = maze[x][y] + 1;
            queue.push([nx, ny]);
        }
    }

    return maze[N - 1][M - 1];
}

// 입력 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(line => line.split('').map(Number));

// 결과 출력
console.log(bfs(maze, N, M));
