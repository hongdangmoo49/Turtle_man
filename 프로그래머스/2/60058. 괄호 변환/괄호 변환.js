function solution(p) {
    if (p === "") return "";

    let balance = 0;
    let pivot = 0;
    do {
        p[pivot] === '(' ? balance++ : balance--;
        pivot++;
    } while (balance !== 0);

    const u = p.slice(0, pivot);
    const v = p.slice(pivot);

    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        let answer = '(' + solution(v) + ')';
        for (let i = 1; i < u.length - 1; i++) {
            answer += u[i] === '(' ? ')' : '(';
        }
        return answer;
    }
}

function isCorrect(str) {
    let balance = 0;
    for (let char of str) {
        if (char === '(') balance++;
        else balance--;

        if (balance < 0) return false;
    }
    return balance === 0;
}