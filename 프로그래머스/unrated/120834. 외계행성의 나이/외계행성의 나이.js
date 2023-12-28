function solution(age) {
    var answer = '';
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    while(age > 0){
        answer = alph[age % 10] + answer;
        age = Math.floor(age/10);
    }
    
    return answer;
}