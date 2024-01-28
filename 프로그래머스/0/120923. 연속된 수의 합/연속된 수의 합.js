function solution(num, total) {
    // 연속된 숫자들의 평균 구하기
    let average = total / num;

    // 평균을 중심으로 배열 생성
    let start = Math.ceil(average - (num / 2));
    let result = [];

    for(let i = 0; i < num; i++) {
        result.push(start + i);
    }

    return result;
}
