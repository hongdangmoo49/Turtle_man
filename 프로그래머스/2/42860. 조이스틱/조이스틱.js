function solution(name) {
    let answer = 0;
    let n = name.length;
    let move = n - 1;

    for (let i = 0; i < n; i++) {

        answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 26 - (name.charCodeAt(i) - 'A'.charCodeAt(0)));

        let next = i + 1;
        while (next < n && name[next] === 'A') {
            next++;
        }

        move = Math.min(move, i + n - next + Math.min(i, n - next));
    }

    answer += move;
    return answer;
}