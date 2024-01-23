function solution(n) {
    let number = 1; 
    for(let count = 1; count <= n; number++){
        
        if(number % 3 === 0 || number.toString().includes('3'))
            continue;
        
        if(count === n)
            return number;
        
         count++;
    }
   
}