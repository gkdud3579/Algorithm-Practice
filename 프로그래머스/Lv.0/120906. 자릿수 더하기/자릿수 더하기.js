function solution(n) {
    var answer = 0;
    var digits = n.toString().split('');
    answer = digits.reduce((acc, cur) => acc + parseInt(cur), 0);
    return answer;
}