// 생성자를 찾는 함수
function d(n) {
    let sum = n;
    while (n > 0) {
        sum += n % 10; // 각 자리수를 더함
        n = Math.floor(n / 10);
    }
    return sum;
}

// 생성자가 있는 숫자를 추적하기 위한 배열
const hasConstructor = Array(10001).fill(false);

// 1부터 10000까지 모든 숫자에 대해 생성자가 있는지 확인
for (let i = 1; i <= 10000; i++) {
    const constructor = d(i);
    if (constructor <= 10000) {
        hasConstructor[constructor] = true; // 생성자가 있음을 표시
    }
}

// 셀프 넘버 출력
for (let i = 1; i <= 10000; i++) {
    if (!hasConstructor[i]) { // 생성자가 없는 숫자만 출력
        console.log(i);
    }
}
