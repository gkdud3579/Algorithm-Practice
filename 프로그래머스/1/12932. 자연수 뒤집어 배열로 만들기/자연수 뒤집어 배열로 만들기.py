def solution(n):
    # 1. 숫자를 문자열로 변환하고, 각 문자를 리스트로 분리
    n_str = str(n)
    
    # 2. 문자열을 뒤집고, 각 문자를 정수로 변환하여 리스트로 변환
    reversed_list = list(map(int, n_str[::-1]))
    
    return reversed_list