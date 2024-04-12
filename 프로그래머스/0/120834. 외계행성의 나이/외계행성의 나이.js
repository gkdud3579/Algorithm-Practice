function solution(age) {
    let answer = '';
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    while ( age > 0) {
        answer = alpha[age % 10] + answer;
        age = Math.floor(age/10);
        
    }
    return answer;
}