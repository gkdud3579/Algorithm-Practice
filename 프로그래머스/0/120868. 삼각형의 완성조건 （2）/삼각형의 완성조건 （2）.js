function solution(sides) {
    const [a, b] = sides.sort((x, y) => x - y);
    const minC = Math.abs(a - b) + 1;
    const maxC = a + b - 1;
    return maxC - minC + 1;
}
