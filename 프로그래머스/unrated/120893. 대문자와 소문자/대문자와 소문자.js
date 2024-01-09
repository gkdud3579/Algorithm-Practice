function solution(my_string) {
    let result = '';

    for (let i = 0; i < my_string.length; i++) {
        result += (my_string[i] >= 'a' && my_string[i] <= 'z') 
                  ? my_string[i].toUpperCase() 
                  : my_string[i].toLowerCase();
    }

    return result;
}
