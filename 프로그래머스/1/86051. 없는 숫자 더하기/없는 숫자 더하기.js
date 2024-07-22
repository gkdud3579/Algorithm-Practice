function solution(numbers) {
    const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let missingSum = 0;

    for (let num of allNumbers) {
        if (!numbers.includes(num)) {
            missingSum += num;
        }
    }

    return missingSum;
}