function solution(order) {
    let result = 0;
    let orderStr = order.toString(); // 숫자를 문자열로 변환

    for(let i = 0; i < orderStr.length; i++){
        if(orderStr[i] === '3' || orderStr[i] === '6' || orderStr[i] === '9') {
            result++;
        }
    }
    return result;
}
