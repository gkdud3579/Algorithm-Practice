function solution(s) {
    const length = s.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        // 문자열 길이가 짝수인 경우, 가운데 두 글자 반환
        return s.slice(mid - 1, mid + 1);
    } else {
        // 문자열 길이가 홀수인 경우, 가운데 한 글자 반환
        return s.charAt(mid);
    }
}