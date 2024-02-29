function zVisit(N, r, c) {
    let answer = 0; // 방문 순서를 저장할 변수
    let size = Math.pow(2, N); // 배열의 크기
    let x = 0, y = 0; // 현재 탐색 위치
    
    while(size > 1) {
        size /= 2;
        
        // 1사분면
        if (r < x + size && c < y + size) {
            // (r, c)는 현재 사분면에 있으므로 추가 작업이 필요 없습니다.
        }
        // 2사분면
        else if (r < x + size) {
            answer += size * size; // 1사분면의 모든 칸을 방문한 후
            y += size;
        }
        // 3사분면
        else if (c < y + size) {
            answer += size * size * 2; // 1사분면, 2사분면의 모든 칸을 방문한 후
            x += size;
        }
        // 4사분면
        else {
            answer += size * size * 3; // 1사분면, 2사분면, 3사분면의 모든 칸을 방문한 후
            x += size;
            y += size;
        }
    }
    
    return answer;
}

// 입력 처리
const fs = require('fs');
const [N, r, c] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

console.log(zVisit(N, r, c));
