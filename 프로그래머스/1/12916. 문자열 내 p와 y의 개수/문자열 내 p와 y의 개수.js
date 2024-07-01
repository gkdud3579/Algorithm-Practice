function solution(s) {
    // 1. 문자열을 소문자로 변환
    let lowerCaseString = s.toLowerCase();
    
    // 2. 'p'와 'y'의 개수를 셈
    let pCount = 0;
    let yCount = 0;
    
    for (let char of lowerCaseString) {
        if (char === 'p') {
            pCount++;
        } else if (char === 'y') {
            yCount++;
        }
    }
    
    // 3. 개수를 비교하여 결과 반환
    return pCount === yCount;
}