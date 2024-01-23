function solution(dots) {
    // 두 점 사이의 기울기를 계산하는 함수
    const slope = (p1, p2) => (p2[1] - p1[1]) / (p2[0] - p1[0]);

    // 네 점을 두 쌍으로 나누어 각각의 기울기 계산
    let slope1 = slope(dots[0], dots[1]);
    let slope2 = slope(dots[2], dots[3]);

    // 두 기울기가 동일한지 확인
    if (slope1 === slope2) {
        return 1;
    }

    // 나머지 쌍에 대해서도 동일한지 확인
    slope1 = slope(dots[0], dots[2]);
    slope2 = slope(dots[1], dots[3]);

    if (slope1 === slope2) {
        return 1;
    }

    slope1 = slope(dots[0], dots[3]);
    slope2 = slope(dots[1], dots[2]);

    if (slope1 === slope2) {
        return 1;
    }

    // 평행한 경우가 없으면 0 반환
    return 0;
}
