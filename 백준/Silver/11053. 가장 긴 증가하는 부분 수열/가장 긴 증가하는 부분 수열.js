const fs = require('fs');
const [N, input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const A = input.split(' ').map(Number);
let dp = new Array(+N).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (A[j] < A[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
