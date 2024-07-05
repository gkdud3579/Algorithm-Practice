function solution(n) {
    // 1. 숫자를 문자열로 변환하고, 각 문자를 배열로 분리
    var nArray = n.toString().split("");
    
    // 2. 배열을 내림차순으로 정렬
    nArray.sort((a, b) => b - a);
    
    // 3. 정렬된 배열을 문자열로 합친 후, 숫자로 변환
    var sortedNumber = parseInt(nArray.join(""), 10);
    
    return sortedNumber;
}