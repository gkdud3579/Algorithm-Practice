// readline 모듈을 사용하기 위해 필요한 설정입니다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 입력 받은 데이터를 저장할 배열입니다.
const inputs = [];

// 'line' 이벤트 리스너를 설정하여 입력받은 각 줄을 처리합니다.
rl.on('line', function (line) {
  // 입력된 각 줄을 공백으로 구분하여 숫자 배열로 변환합니다.
  inputs.push(line.split(' ').map(Number));
}).on('close', function () {
  // 모든 입력이 끝났을 때 실행될 함수입니다.

  // 입력받은 데이터를 순회하면서 각 케이스에 대해 관계를 판별합니다.
  inputs.forEach(([a, b]) => {
    if (a === 0 && b === 0) return; // 입력의 끝을 나타내는 0 0이면 종료합니다.
    
    // 첫 번째 숫자가 두 번째 숫자의 약수인 경우
    if (b % a === 0) {
      console.log('factor');
    // 첫 번째 숫자가 두 번째 숫자의 배수인 경우
    } else if (a % b === 0) {
      console.log('multiple');
    // 둘 다 아닌 경우
    } else {
      console.log('neither');
    }
  });

  process.exit();
});
