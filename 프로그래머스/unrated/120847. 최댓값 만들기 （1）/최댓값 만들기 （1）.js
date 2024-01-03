function solution(numbers) {
    let max1 = 0;
    let max2 = 0;

    for (let num of numbers) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max1 * max2;
}
