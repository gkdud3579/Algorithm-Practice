function solution(hp) {
    let ant = 0;

    // 장군개미부터 최대한 많이 사용
    ant += Math.floor(hp / 5);
    hp %= 5;

    // 병정개미 사용
    ant += Math.floor(hp / 3);
    hp %= 3;

    // 일개미 사용
    ant += hp;

    return ant;
}
