function solution(n){
    let num = 1;
    while(factorial(num) <= n)
        num++;
    return num - 1;
}

function factorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++)
        result *= i;
    
    return result;
}