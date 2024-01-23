function solution(a, b) {
    // 최대공약수(GCD)를 찾는 함수
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }

    // a와 b의 최대공약수로 각각을 나누어 기약분수를 만듦
    const g = gcd(a, b);
    a /= g;
    b /= g;

    // 분모 b를 2와 5의 소인수로만 나누어본다
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    // 분모가 1이면 유한소수이므로 1 반환, 그렇지 않으면 무한소수이므로 2 반환
    return b === 1 ? 1 : 2;
}