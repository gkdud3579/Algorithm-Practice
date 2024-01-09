function solution(array, n) {
    return array.reduce((acc, curr) => {
        return Math.abs(acc - n) < Math.abs(curr - n) ? acc : (Math.abs(acc - n) === Math.abs(curr - n) ? Math.min(acc, curr) : curr);
    });
}
