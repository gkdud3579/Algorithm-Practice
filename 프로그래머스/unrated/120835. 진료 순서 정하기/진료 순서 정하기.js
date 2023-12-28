function solution(emergency) {
    // 응급도가 높은 순으로 정렬된 배열 생성
    const sorted = [...emergency].sort((a, b) => b - a);
    
    // 각 환자의 진료 순서를 찾아 배열에 저장
    const order = emergency.map(e => sorted.indexOf(e) + 1);
    
    return order;
}