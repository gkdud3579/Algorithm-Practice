def solution(phone_number):
    # 전화번호의 길이
    length = len(phone_number)

    # 뒤 4자리를 제외한 나머지 부분을 '*'로 대체
    masked_part = '*' * (length - 4)

    # 결과 문자열 생성
    result = masked_part + phone_number[-4:]

    return result