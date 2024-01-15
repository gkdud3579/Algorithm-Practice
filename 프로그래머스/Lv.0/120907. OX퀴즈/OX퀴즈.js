function solution(quiz) {
    return quiz.map(q => {
        let parts = q.split(' '); // 수식을 공백으로 분리
        let left = parseInt(parts[0]); // 첫 번째 숫자
        let operator = parts[1]; // 연산자
        let right = parseInt(parts[2]); // 두 번째 숫자
        let result = parseInt(parts[4]); // 결과값

        // 실제 계산 결과
        let calculatedResult = operator === '+' ? left + right : left - right;

        // 계산 결과와 주어진 결과값 비교
        return calculatedResult === result ? 'O' : 'X';
    });
}
