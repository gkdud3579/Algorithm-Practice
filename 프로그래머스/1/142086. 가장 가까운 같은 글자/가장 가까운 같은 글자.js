function solution(s) {
    let answer = new Array(s.length).fill(-1); // 초기값 -1로 설정
    let lastPosition = {}; // 각 문자의 마지막 위치를 저장할 객체

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastPosition[char] !== undefined) { // 이전에 같은 문자가 나타난 적이 있다면
            answer[i] = i - lastPosition[char]; // 현재 위치와 마지막 위치의 차이 계산
        }
        lastPosition[char] = i; // 현재 문자의 위치를 업데이트
    }
    return answer;
}
