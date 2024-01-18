function solution(polynomial) {
    const terms = polynomial.split(" + ");
    let xTerm = 0; // 일차 항의 합
    let constant = 0; // 상수항의 합

    terms.forEach(term => {
        if (term.includes('x')) {
            // 계수 1은 생략되었을 수 있으므로, 'x'만 있으면 계수를 1로 간주
            const coefficient = term.replace('x', '') || '1';
            xTerm += parseInt(coefficient, 10);
        } else {
            constant += parseInt(term, 10);
        }
    });

    let result = '';
    if (xTerm !== 0) {
        result += (xTerm === 1 ? 'x' : `${xTerm}x`);
        if (constant !== 0) {
            result += ` + ${constant}`;
        }
    } else if (constant !== 0) {
        result = `${constant}`;
    }

    return result;
}
