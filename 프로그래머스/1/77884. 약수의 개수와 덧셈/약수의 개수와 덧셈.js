function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        let divisorsCount = countDivisors(i);

        if (divisorsCount % 2 === 0) {
            result += i; // 약수의 개수가 짝수인 경우 더하기
        } else {
            result -= i; // 약수의 개수가 홀수인 경우 빼기
        }
    }

    return result;
}