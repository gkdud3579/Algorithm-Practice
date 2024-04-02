function solution(t, p) {
    let count = 0; // 조건을 만족하는 부분 문자열의 수를 저장할 변수
    const pLength = p.length; // p의 길이
    const pValue = parseInt(p, 10); // p를 정수로 변환

    // t를 순회하며 각 위치에서 시작하는 길이 pLength의 부분 문자열을 확인
    for (let i = 0; i <= t.length - pLength; i++) {
        const subStr = t.substring(i, i + pLength); // 부분 문자열 추출
        const subValue = parseInt(subStr, 10); // 부분 문자열을 정수로 변환
        
        // 부분 문자열이 나타내는 수가 p보다 작거나 같은 경우, count 증가
        if (subValue <= pValue) {
            count++;
        }
    }

    return count; // 결과 반환
}