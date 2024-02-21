function solve(n) {
    let dp = [0, 1, 2, 4]; // dp[0]은 사용하지 않음, dp[1], dp[2], dp[3] 초기화

    // n이 3보다 클 경우에만 추가 계산
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]; // 점화식에 따라 dp[n] 계산
    }

    return dp[n]; // n을 1, 2, 3의 합으로 나타내는 방법의 수 반환
}

// 입력 처리
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(parseInt(line));
}).on('close', function() {
    const T = input[0]; // 테스트 케이스의 수
    for (let i = 1; i <= T; i++) {
        console.log(solve(input[i])); // 각 테스트 케이스에 대한 결과 출력
    }
    process.exit();
});
