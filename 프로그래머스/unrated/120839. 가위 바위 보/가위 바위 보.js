function solution(rsp) {
    const win = {
        '2' : '0',
        '0' : '5',
        '5' : '2'
    };
    
    return rsp.split('').map(a => win[a]).join('');
}