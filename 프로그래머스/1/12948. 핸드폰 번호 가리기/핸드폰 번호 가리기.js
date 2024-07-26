function solution(phone_number) {
    // 전화번호의 길이
    const length = phone_number.length;

    // 뒤 4자리를 제외한 나머지 부분을 '*'로 대체
    const maskedPart = '*'.repeat(length - 4);

    // 결과 문자열 생성
    const result = maskedPart + phone_number.slice(-4);

    return result;
}