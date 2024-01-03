function solution(box, n) {
    // 상자의 각 차원을 주사위의 길이로 나눈 후, 정수 부분만 취합니다.
    let width = Math.floor(box[0] / n);
    let height = Math.floor(box[1] / n);
    let depth = Math.floor(box[2] / n);

    // 각 차원에서의 주사위 최대 개수를 곱합니다.
    return width * height * depth;
}
