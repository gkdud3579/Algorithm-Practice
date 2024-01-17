function solution(array) {
    return array
        .map(element => (element.toString().match(/7/g) || []).length)
        .reduce((sum, current) => sum + current, 0);
}