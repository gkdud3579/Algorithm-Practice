function solution(s) {
    var answer = 0;
    var numbers = s.split(' ');
    var stack = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === "Z")
            answer -= stack.pop();
        else {
            var num = parseInt(numbers[i]);
            answer += num;
            stack.push(num);
        }
    }
    return answer;
}
