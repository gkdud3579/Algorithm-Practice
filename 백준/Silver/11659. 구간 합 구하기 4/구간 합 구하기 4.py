import sys

# 입력을 읽음
input = sys.stdin.readlines()

N, M = map(int, input[0].split())
numbers = list(map(int, input[1].split()))

# 부분 합 배열 생성
prefix_sum = [0]
for num in numbers:
    prefix_sum.append(prefix_sum[-1] + num)

# 쿼리 처리
for i in range(2, len(input)):
    start, end = map(int, input[i].split())
    print(prefix_sum[end] - prefix_sum[start - 1])
