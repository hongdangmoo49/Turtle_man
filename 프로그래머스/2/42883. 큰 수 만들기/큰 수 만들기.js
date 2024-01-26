function solution(number, k) {
    const stack = [];
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        const num = number[i];

        while (stack.length > 0 && count < k && stack[stack.length - 1] < num) {
            stack.pop();
            count++;
        }

        stack.push(num);
    }

    while (count < k) {
        stack.pop();
        count++;
    }

    return stack.join('');
}