function solution(array) {
    let maxNumber = Math.max(...array);
    let maxIndex = array.indexOf(maxNumber);
    return [maxNumber, maxIndex];
}
