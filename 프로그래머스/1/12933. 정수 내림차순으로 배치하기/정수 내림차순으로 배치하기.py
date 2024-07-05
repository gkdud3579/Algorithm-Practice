def solution(n):
    # 1. 숫자를 문자열로 변환하고, 각 문자를 리스트로 분리
    n_str = str(n)
    
    # 2. 리스트를 내림차순으로 정렬
    sorted_str = sorted(n_str, reverse=True)
    
    # 3. 정렬된 리스트를 문자열로 합친 후, 숫자로 변환
    sorted_number = int("".join(sorted_str))
    
    return sorted_number