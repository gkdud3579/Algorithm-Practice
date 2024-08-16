function solution(arr) {
    // 결과를 저장할 배열 초기화
    let result = [];

    // 첫 번째 요소는 무조건 추가
    result.push(arr[0]);

    // 배열의 두 번째 요소부터 순회 시작
    for (let i = 1; i < arr.length; i++) {
        // 현재 요소가 이전 요소와 다르면 결과 배열에 추가
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}