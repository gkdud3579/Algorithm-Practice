function solution(arr) {
    // 1. 배열의 모든 값을 합산
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    
    // 2. 합산값에 길이를 나눠 평균값 산출
    let average = sum / arr.length;
    return average;
}