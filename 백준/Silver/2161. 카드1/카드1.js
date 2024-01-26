const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 배열 초기화를 위해 주어진 카드의 개수를 담은 변수 N 선언
const N = parseInt(input[0]);

// 카드를 담을 배열 초기화
// { length: N }: Array.from()의 첫 번째 인자는 배열로 만들 객체
// (_, index) => index + 1): 두 번째 인자는 각 요소에 대한 콜백 함수
// 주어진 것: 카드의 개수 ⇒ 따라서 안에 어떤 값이 들어가도 상관 없다.
const cards = Array.from({ length: N }, (_, index) => index + 1);

// 결과를 담을 배열
const result = [];

while (cards.length > 0) {
    // 현재 가장 위에 있는 카드를 결과에 추가
    result.push(cards.shift());

    // 카드를 한 장 버림 (가장 위에 있는 카드를 맨 아래로 옮김)
    if (cards.length > 0) {
        cards.push(cards.shift());
    }
}

// 결과 출력
console.log(result.join(' '));