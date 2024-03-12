const fs = require('fs');
const [k, signs] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const inequalitySigns = signs.split(' ');

// 최대값과 최소값을 찾기 위한 함수
function findMinMax(k, signs) {
  // 사용 가능한 숫자들
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // 부등호를 만족하는 최대값과 최소값을 찾는 함수
  function check(perm) {
    for (let i = 0; i < signs.length; i++) {
      if (signs[i] === '<' && perm[i] > perm[i + 1]) {
        return false;
      }
      if (signs[i] === '>' && perm[i] < perm[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // 순열을 생성하고 부등호 조건을 만족하는지 확인
  let min = Infinity;
  let max = 0;
  function generatePerm(perm = '', depth = 0) {
    if (depth === k + 1) {
      if (check(perm)) {
        const numValue = parseInt(perm, 10);
        min = Math.min(min, numValue);
        max = Math.max(max, numValue);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!perm.includes(nums[i])) {
        generatePerm(perm + nums[i], depth + 1);
      }
    }
  }

  generatePerm();
  
  // 최소값과 최대값 반환
  return {min: min.toString().padStart(k + 1, '0'), max: max.toString()};
}

const {min, max} = findMinMax(parseInt(k), inequalitySigns);
console.log(max);
console.log(min);
