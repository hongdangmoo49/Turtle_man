function solution(n) {
    if (n === 1) {
        return 1;
    }
    let start = 1, end = 1;
    let sum = 1; 
    let answer = 0;

    while (start <= n/2 + 1) {
        if (sum < n) {
            end++;
            sum += end;
        } else if (sum > n) {
            sum -= start;
            start++;
        } else {
            answer++;
            end++;
            sum += end - start;
            start++;
        }
    }

    return answer + (n === 2 ? 0 : 1);
}