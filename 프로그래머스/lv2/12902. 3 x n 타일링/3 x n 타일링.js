function solution(n) {
if (n % 2 !== 0) return 0;

    const mod = 1_000_000_007;
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[2] = 3;

    for (let i = 4; i <= n; i += 2) {
        dp[i] = 3 * dp[i - 2];
        for (let j = 4; j <= i; j += 2) {
            dp[i] = (dp[i] + 2 * dp[i - j]) % mod;
        }
    }

    return dp[n];
}
