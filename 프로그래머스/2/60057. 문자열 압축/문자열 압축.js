function solution(s) {
    const length = s.length;
    let answer = length;

    for (let step = 1; step <= length / 2; ++step) {
        let compressed = '';
        let prev = s.substr(0, step);
        let count = 1;

        for (let j = step; j <= length; j += step) {
            const next = s.substr(j, step);
            if (prev === next) {
                count++;
            } else {
                compressed += (count > 1 ? count : '') + prev;
                prev = next;
                count = 1;
            }
        }

        compressed += (count > 1 ? count : '') + prev;

        answer = Math.min(answer, compressed.length);
    }

    return answer;
}