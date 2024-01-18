function solution(numbers) {
    let maxProduct = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            maxProduct = Math.max(maxProduct, numbers[i] * numbers[j]);
        }
    }

    return maxProduct;
}
