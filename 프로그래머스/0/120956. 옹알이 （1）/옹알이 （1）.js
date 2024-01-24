function solution(babbling) {
    var answer = 0;
    for(let i = 0; i < babbling.length; i++){
        // 각 발음이 한 번씩만 등장하는지 확인
        if (/^(aya|ye|woo|ma)+$/.test(babbling[i]) &&
            !/(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/.test(babbling[i])) {
            answer++;
        }
    }
    return answer;
}
