function solution(n) {
   //1. 정수를 문자열로 문자열을 배열로
    var nArray = n.toString().split("");
    //2. 배열을 역순으로 정렬
    var reverseArray = nArray.sort((a,b) => b - a);
    //3. 배열을 숫자로
    return parseInt(reverseArray.join(""), 10);
}