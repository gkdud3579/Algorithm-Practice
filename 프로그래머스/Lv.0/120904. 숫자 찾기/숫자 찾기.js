function solution(num, k) {
    let numStr = num.toString(); // 숫자를 문자열로 변환
    let index = numStr.indexOf(k.toString()); // k의 위치를 찾음

    // k가 문자열 내에 존재하면 그 위치(인덱스+1)를 반환, 없으면 -1 반환
    return index !== -1 ? index + 1 : -1;
}
