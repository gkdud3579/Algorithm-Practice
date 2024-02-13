// 입력 처리
const fs = require('fs');
const [N, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const inputs = cases.map(line => line.split(' ').map(Number));

const days = parseInt(N);
const schedules = inputs.slice(0, days);

let dp = new Array(days + 1).fill(0);

for (let i = 0; i < days; i++) {
    const [time, pay] = schedules[i];
    if (i + time <= days) { // 상담을 마칠 수 있는 경우
        dp[i + time] = Math.max(dp[i + time], dp[i] + pay); // 상담을 마친 경우
    }
    dp[i + 1] = Math.max(dp[i + 1], dp[i]); // 상담을 하지 않는 경우
}

console.log(dp[days]); // N일까지의 최대 수익
