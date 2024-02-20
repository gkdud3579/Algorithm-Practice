const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 한수를 판별하는 함수
function isHansu(number) {
    const strNum = String(number);
    const length = strNum.length;
    
    if (length < 3) return true; // 1자리 또는 2자리 수는 모두 한수
    
    const diff = strNum[1] - strNum[0]; // 첫 번째와 두 번째 자리의 차이
    
    for (let i = 2; i < length; i++) {
        if (strNum[i] - strNum[i - 1] !== diff) return false; // 등차수열을 이루지 않으면 false
    }
    
    return true; // 모든 검사를 통과하면 한수
}

// 1부터 N까지 한수의 개수를 계산하는 함수
function countHansu(N) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (isHansu(i)) count++; // 한수라면 카운트 증가
    }
    return count;
}

// 입력 처리
rl.on('line', function(line) {
  const N = parseInt(line);
  console.log(countHansu(N)); // 한수의 개수 출력
  rl.close();
}).on('close', function() {
  process.exit();
});
