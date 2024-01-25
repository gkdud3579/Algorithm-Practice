function solution(bin1, bin2) {
    // 두 이진수 문자열을 정수로 변환
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    // 두 정수를 더한 후, 이진수 문자열로 변환
    const sum = num1 + num2;
    return sum.toString(2);
}
