function solution(n, t, m, p) {
    let result = '';
    let sequence = '';
    let number = 0;

    while (sequence.length < t * m) {

        let numStr = number.toString(n).toUpperCase();

        sequence += numStr;

        number++;
    }

    for (let i = 0; i < t; i++) {
        result += sequence[(p - 1) + i * m];
    }

    return result;
}