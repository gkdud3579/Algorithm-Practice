function solution(arr1, arr2) {
    // 결과를 저장할 새로운 행렬 초기화
    let result = [];

    // 행렬의 각 행을 순회
    for (let i = 0; i < arr1.length; i++) {
        // 각 행에 대해 결과 행렬의 행 초기화
        let row = [];
        
        // 각 행의 열을 순회
        for (let j = 0; j < arr1[i].length; j++) {
            // 같은 위치의 요소를 더하여 결과 행렬에 추가
            row.push(arr1[i][j] + arr2[i][j]);
        }
        
        // 결과 행렬에 추가
        result.push(row);
    }

    return result;
}