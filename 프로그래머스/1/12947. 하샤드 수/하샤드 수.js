function solution(x) {
    // 1. 정수를 문자열로 변환하고, 각 자릿수를 배열로 분리
    let xArray = x.toString().split('').map(Number);
    
    // 2. 각 자릿수를 숫자로 변환하여 합을 구함
    let sum = xArray.reduce((acc, curr) => acc + curr, 0);
    
    // 3. 입력된 정수를 자릿수의 합으로 나누어 나머지가 0인지 확인
    return x % sum === 0;
}