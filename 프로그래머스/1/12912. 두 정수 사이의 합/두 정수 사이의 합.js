function solution(a, b) {
    // 작은 값과 큰 값을 결정
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    // 모든 정수의 합을 계산
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}