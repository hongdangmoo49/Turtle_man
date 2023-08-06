function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let prevPrev = 1;
    let prev = 2;
    let current = 0;

    const MOD = 1_000_000_007;

    for (let i = 3; i <= n; i++) {
        current = (prev + prevPrev) % MOD;
        prevPrev = prev;
        prev = current;
    }

    return current;
}
