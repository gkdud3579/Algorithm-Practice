function solution(d, budget) {
    // 부서별 신청 금액을 오름차순으로 정렬
    d.sort((a, b) => a - b);
    
    let count = 0;
    let sum = 0;
    
    // 예산을 초과하지 않는 한 부서에 지원
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        if (sum <= budget) {
            count++;
        } else {
            break; // 예산 초과 시 중단
        }
    }
    
    return count;
}