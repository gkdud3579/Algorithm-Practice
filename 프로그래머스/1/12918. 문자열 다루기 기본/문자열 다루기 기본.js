function solution(s) {
    // 문자열 길이가 4 또는 6이 아닌 경우 false 반환
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 모든 문자가 숫자인지 확인
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] === ' ') {
            return false;
        }
    }
    
    return true;
}