function solution(n) {
    // "수박" 패턴을 n/2 + 1 만큼 반복해서 생성
    let pattern = "수박".repeat(Math.ceil(n / 2));
    
    // 길이 n에 맞게 자르기
    return pattern.slice(0, n);
}