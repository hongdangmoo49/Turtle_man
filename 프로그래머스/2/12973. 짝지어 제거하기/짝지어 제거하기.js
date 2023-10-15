function solution(S) {
    const stack = [];

    for (let char of S) {
        if (stack.length === 0 || stack[stack.length - 1] !== char) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }

    return stack.length === 0 ? 1 : 0;
}

