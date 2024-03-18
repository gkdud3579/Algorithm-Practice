const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [N, K] = line.split(' ').map(Number);
  console.log(findMinimumBottlesToAdd(N, K));
  rl.close();
}).on('close', () => {
  process.exit();
});

function findMinimumBottlesToAdd(N, K) {
  let count = 0; // 추가로 필요한 물병 수
  while (true) {
    let bottle = N;
    let used = 0; // 현재 상태에서 사용되는 물병의 수
    while (bottle > 0) {
      if (bottle % 2 === 1) used++; // 현재 물병이 홀수일 때 사용된 물병 수를 증가
      bottle >>= 1; // 물병 수를 반으로 줄임 (2로 나눔)
    }
    if (used <= K) break; // 사용된 물병의 수가 K 이하이면 반복 종료
    N++; // 사용된 물병의 수가 K를 초과하면 물병을 하나 추가
    count++; // 추가된 물병의 수를 증가
  }
  return count; // 필요한 추가 물병의 수 반환
}
