def min_length_toys(toys, K):
    start = end = 0
    count = 0
    min_length = float('inf')

    while end < len(toys):
        if toys[end] == 1:
            count += 1

        while count >= K:
            min_length = min(min_length, end - start + 1)
            if toys[start] == 1:
                count -= 1
            start += 1

        end += 1

    return min_length if min_length != float('inf') else -1

# 입력 처리
N, K = map(int, input().split())
toys = list(map(int, input().split()))

# 함수 호출 및 결과 출력
print(min_length_toys(toys, K))
