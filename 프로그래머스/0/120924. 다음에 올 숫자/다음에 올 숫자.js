function solution(common) {
    let length = common.length;
    let last = common[length - 1];
    let secondLast = common[length - 2];

    // 등차수열인지 확인
    if (common[1] - common[0] === common[2] - common[1]) {
        let diff = common[1] - common[0];
        return last + diff;
    } 
    // 등비수열인지 확인
    else if (common[1] / common[0] === common[2] / common[1]) {
        let ratio = common[1] / common[0];
        return last * ratio;
    }
}
