function solution(arr, divisor) {
    // 나누어 떨어지는 값을 저장할 배열
    let result = arr.filter(num => num % divisor === 0);
    
    // 결과 배열이 비어있으면 -1을 반환
    if (result.length === 0) {
        return [-1];
    }
    
    // 오름차순으로 정렬하여 반환
    return result.sort((a, b) => a - b);
}