function solution(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prevPrev = 0;
    let prev = 1;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        current = (prevPrev + prev) % 1234567;
        prevPrev = prev;
        prev = current;
    }

    return current;
}