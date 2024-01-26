const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 배열 초기화를 위해 주어진 카드의 개수를 담은 변수 N 선언
const N = parseInt(input[0]);

function solution(N) {
    const queue = [];
    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }

    const discarded = [];
    while (queue.length > 1) {
        discarded.push(queue.shift()); // 제일 위의 카드를 버린다
        queue.push(queue.shift()); // 다음 카드를 맨 뒤로 옮긴다
    }

    console.log([...discarded, queue[0]].join(' '));
}

solution(N);
