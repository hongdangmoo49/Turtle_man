function solution(W, H) {
    const gcd = (a, b) => {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    };

    const GCD = gcd(W, H);
    return W * H - (W + H - GCD);
}