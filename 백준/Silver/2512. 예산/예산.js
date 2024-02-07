const fs = require('fs');
// 파일 입력 방식 대신 표준 입력 처리 방식으로 변경해야 할 경우 수정 필요
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에 지방의 수 N
const N = parseInt(input[0]);
// 두 번째 줄에 각 지방의 예산 요청
const requests = input[1].split(' ').map(Number);
// 세 번째 줄에 총 예산 M
const M = parseInt(input[2]);

// 이분 탐색을 위한 시작점과 종료점 설정
let start = 0;
let end = Math.max(...requests); // 요청 예산 중 최댓값

// 최적의 상한액을 찾기 위한 이분 탐색
let result = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 중간값을 상한액으로 가정
    let sum = 0; // 상한액을 적용한 총 예산 계산

    // 각 지방의 예산 요청에 대해 상한액 적용
    for (let request of requests) {
        if (request > mid) {
            sum += mid; // 상한액보다 큰 요청에는 상한액 배정
        } else {
            sum += request; // 그 외에는 요청 금액 그대로 배정
        }
    }

    // 총 예산이 M을 초과하는 경우 상한액을 낮춤
    if (sum > M) {
        end = mid - 1;
    } else {
        start = mid + 1;
        result = mid; // 현재의 mid 값이 조건을 만족하는 최대 상한액
    }
}

console.log(result); // 최적의 상한액 출력
