function solution(n) {
    let compositeCount = 0;

    for (let i = 2; i <= n; i++) {
        if (isComposite(i)) {
            compositeCount++;
        }
    }

    return compositeCount;
}

function isComposite(number) {
    let divisors = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors++;
        }
    }
    return divisors > 2;
}
