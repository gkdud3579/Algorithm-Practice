function calculateResidents(k, n) {
    // 주어진 층과 호수에 대해 거주민 수 계산
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    // 0층 초기화: i호에는 i명이 거주
    for (let i = 1; i <= n; i++) {
        dp[0][i] = i;
    }

    // 각 층의 각 호수별 거주민 수 계산
    for (let floor = 1; floor <= k; floor++) {
        for (let room = 1; room <= n; room++) {
            for (let i = 1; i <= room; i++) {
                dp[floor][room] += dp[floor - 1][i];
            }
        }
    }

    return dp[k][n];
}

// 입력 처리
const fs = require('fs');
const [T, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < T * 2; i += 2) {
    const k = parseInt(cases[i]), n = parseInt(cases[i + 1]);
    console.log(calculateResidents(k, n)); // 결과 출력
}
