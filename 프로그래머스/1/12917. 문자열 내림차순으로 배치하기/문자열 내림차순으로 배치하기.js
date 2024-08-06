function solution(s) {
    // 문자열을 배열로 변환
    let arr = s.split('');
    
    // 배열을 정렬 (대문자는 소문자보다 작은 것으로 간주)
    arr.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    
    // 정렬된 배열을 문자열로 변환하여 반환
    return arr.join('');
}