def solution(arr):
    # 결과를 저장할 리스트 초기화
    result = []

    # 첫 번째 요소는 무조건 추가
    result.append(arr[0])

    # 배열의 두 번째 요소부터 순회 시작
    for i in range(1, len(arr)):
        # 현재 요소가 이전 요소와 다르면 결과 리스트에 추가
        if arr[i] != arr[i - 1]:
            result.append(arr[i])

    return result