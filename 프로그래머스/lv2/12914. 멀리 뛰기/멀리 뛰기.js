function solution(n) {
    let ways = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        ways[i] = (ways[i - 1] + ways[i - 2]) % 1234567;
    }

    return ways[n];
}