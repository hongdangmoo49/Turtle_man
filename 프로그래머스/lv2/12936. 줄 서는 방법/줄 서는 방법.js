function solution(n, k) {
    let answer = [];
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let factorial = 1;

    for (let i = 1; i < n; i++) {
        factorial *= i;
    }

    k -= 1;

    while (numbers.length) {
        answer.push(numbers.splice(Math.floor(k / factorial), 1)[0]);
        if (numbers.length === 0) break;
        k %= factorial;
        factorial /= numbers.length;
    }

    return answer;
}
