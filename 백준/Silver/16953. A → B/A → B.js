const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const [A, B] = line.split(' ').map(Number);
  const result = solve(A, B);
  console.log(result);
  rl.close();
}).on('close', function () {
  process.exit();
});

function solve(A, B) {
  let count = 0;
  while (B > A) {
    // B가 A보다 큰 경우만 연산을 계속 진행한다.
    count++;
    if (B % 2 === 0) {
      // B가 2로 나누어떨어지면, 2로 나눈다.
      B /= 2;
    } else if (B % 10 === 1) {
      // B의 마지막 숫자가 1이면, 1을 제거한다.
      B = Math.floor(B / 10);
    } else {
      // 위의 두 경우가 아니면 A를 B로 만들 수 없다.
      return -1;
    }
  }
  // B가 A와 같아지는 순간의 연산 횟수를 반환한다.
  // A를 B로 만드는 것이 불가능한 경우에는 이미 -1이 반환되었을 것이다.
  // 가능한 경우에는 연산 횟수에 1을 더해 반환한다(문제의 요구사항).
  return A === B ? count + 1 : -1;
}
