function solution(score) {
    // 학생 수만큼 등수 배열 초기화
    var answer = new Array(score.length).fill(0);

    // 각 학생의 평균 점수 계산
    let averages = score.map(s => (s[0] + s[1]) / 2);

    // 평균 점수와 원래 인덱스를 포함한 배열 생성
    let avgWithIndex = averages.map((avg, index) => [avg, index]);

    // 평균 점수를 기준으로 내림차순 정렬
    avgWithIndex.sort((a, b) => b[0] - a[0]);

    // 등수 계산
    let rank = 1;
    for (let i = 0; i < avgWithIndex.length; i++) {
        // 이전 학생과 평균 점수가 다르면 등수를 업데이트
        if (i > 0 && avgWithIndex[i][0] !== avgWithIndex[i - 1][0]) {
            rank = i + 1;
        }
        // 원래 인덱스 위치에 등수 저장
        answer[avgWithIndex[i][1]] = rank;
    }

    return answer;
}
