function solution(a, b) {
    // 두 배열의 내적을 저장할 변수
    let sum = 0;

    // 배열의 길이만큼 반복
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }

    return sum;
}