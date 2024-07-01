def solution(s):
    # 1. 문자열을 소문자로 변환
    lower_case_string = s.lower()
    
    # 2. 'p'와 'y'의 개수를 셈
    p_count = lower_case_string.count('p')
    y_count = lower_case_string.count('y')
    
    # 3. 개수를 비교하여 결과 반환
    return p_count == y_count