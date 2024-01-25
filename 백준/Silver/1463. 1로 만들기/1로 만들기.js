function minOperations(N) {
    const dp = new Array(N + 1).fill(0);

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + 1; // 1을 빼는 연산
        if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 2로 나누는 연산
        if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 3으로 나누는 연산
    }

    return dp[N];
}

// 입력 처리
const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// 결과 출력
console.log(minOperations(N));
