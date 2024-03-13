// 입력을 처리하기 위한 기본 설정
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력값을 저장할 배열
let input = [];
rl.on('line', function (line) {
  // 입력값을 배열에 저장
  input.push(line);
}).on('close', function () {
  // 첫 번째 입력에서 부등호의 개수(k)를 파악하고, 부등호들을 배열로 변환
  const k = parseInt(input[0]);
  const inequalities = input[1].split(' ');

  // 0부터 9까지의 숫자 문자열 배열 생성
  const nums = Array.from({ length: 10 }, (_, i) => String(i));
  
  // 최소값과 최대값을 초기화
  let min = Infinity;
  let max = 0;

  // 주어진 부등호 조건에 맞는 순열을 생성하는 함수
  function generatePerm(perm = '', depth = 0) {
    // 순열이 완성된 경우(재귀의 깊이가 k+1에 도달)
    if (depth === k + 1) {
      // 순열이 부등호 조건을 만족하는지 확인
      if (check(perm)) {
        // 순열을 숫자로 변환
        const numValue = parseInt(perm, 10);
        // 최소값과 최대값 업데이트
        min = Math.min(min, numValue);
        max = Math.max(max, numValue);
      }
      return;
    }

    // 가능한 모든 숫자에 대해 순열 추가 시도
    for (let i = 0; i < nums.length; i++) {
      // 현재 숫자가 순열에 포함되어 있지 않은 경우만 추가
      if (!perm.includes(nums[i])) {
        generatePerm(perm + nums[i], depth + 1);
      }
    }
  }

  // 순열 생성 함수 호출
  generatePerm();

  // 결과 출력
  console.log(String(max).padStart(k + 1, '0'));
  console.log(String(min).padStart(k + 1, '0'));

  // 주어진 순열이 부등호 조건을 만족하는지 확인하는 함수
  function check(perm) {
    for (let i = 0; i < k; i++) {
      // 부등호가 '<'인 경우 왼쪽 숫자가 오른쪽 숫자보다 커야 함
      if (inequalities[i] === '<' && perm[i] >= perm[i + 1]) {
        return false;
      }
      // 부등호가 '>'인 경우 왼쪽 숫자가 오른쪽 숫자보다 작아야 함
      if (inequalities[i] === '>' && perm[i] <= perm[i + 1]) {
        return false;
      }
    }
    // 모든 조건을 만족하는 경우 true 반환
    return true;
  }
});
