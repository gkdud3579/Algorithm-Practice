function solution(before, after) {
    // 문자열을 배열로 변환, 정렬 후 다시 문자열로 조합
    const arrBefore = before.split('').sort().join('');
    const arrAfter = after.split('').sort().join('');

    return arrBefore === arrAfter ? 1 : 0;
}
