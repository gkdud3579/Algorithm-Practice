function findFastestTime(N, K) {
    if (N >= K) {
        return N - K;
    }

    const visited = new Array(100001).fill(false);
    const queue = [[N, 0]]; // [현재 위치, 시간]
    visited[N] = true;

    while (queue.length) {
        const [current, time] = queue.shift();

        if (current === K) {
            return time;
        }

        // 걷기
        if (current - 1 >= 0 && !visited[current - 1]) {
            queue.push([current - 1, time + 1]);
            visited[current - 1] = true;
        }
        if (current + 1 <= 100000 && !visited[current + 1]) {
            queue.push([current + 1, time + 1]);
            visited[current + 1] = true;
        }
        // 순간이동
        if (current * 2 <= 100000 && !visited[current * 2]) {
            queue.push([current * 2, time + 1]);
            visited[current * 2] = true;
        }
    }
}

// 입력 처리
const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 결과 출력
console.log(findFastestTime(N, K));
