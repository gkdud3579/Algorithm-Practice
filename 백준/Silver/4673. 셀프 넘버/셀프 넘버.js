//1. 생성자 찾기
function d(n) {
    let sum = n;
    while (n > 0) {
        sum += n % 10
        n = Math.floor(n / 10);
    }
    return sum;
}
//2. 생성자가 있는 숫자 추적하기 위한 배열
const hasConstructor = Array(10001).fill(false);

//3. 1부터 10000까지 숫자 중 생성자가 있는지 추적
for (let i = 1; i <= 10000; i++) {
    const constructor = d(i);
    if(constructor <= 100000)
        hasConstructor[constructor] = true
}
//4. 셀프 넘버 출력
for(let i = 1; i <= 10000; i++) {
    if(!hasConstructor[i])
        console.log(i);
}