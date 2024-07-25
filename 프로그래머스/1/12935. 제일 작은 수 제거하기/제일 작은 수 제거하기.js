function solution(arr) {
    // 배열이 하나의 요소만 갖고 있으면 -1을 반환
    if (arr.length <= 1) {
        return [-1];
    }
    
    // 배열에서 가장 작은 값 찾기
    let minValue = Math.min(...arr);
    
    // 가장 작은 값을 제거한 새로운 배열 만들기
    let result = arr.filter(value => value !== minValue);
    
    return result;
}