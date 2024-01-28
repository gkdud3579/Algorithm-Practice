function solution(A, B) {
    // A와 B가 이미 같은 경우
    if (A === B) return 0;

    // A를 오른쪽으로 밀어서 B와 비교
    for (let i = 1; i < A.length; i++) {
        // A의 마지막 문자를 앞으로 옮긴 후 나머지 문자열과 합침
        let shiftedA = A.slice(-i) + A.slice(0, -i);

        // 만약 밀어서 B와 같아진다면 해당 횟수 반환
        if (shiftedA === B) return i;
    }

    // A를 밀어도 B가 될 수 없는 경우
    return -1;
}
