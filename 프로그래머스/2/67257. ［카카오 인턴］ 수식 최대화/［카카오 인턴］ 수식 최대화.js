function solution(expression) {
    const operations = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+']
    ];

    const calculate = (op1, op2, operator) => {
        switch (operator) {
            case '+': return op1 + op2;
            case '-': return op1 - op2;
            case '*': return op1 * op2;
        }
    };

    const compute = (expression, ops) => {
        let tmpExp = expression.split(/(\D)/);

        for (let op of ops) {
            while (tmpExp.includes(op)) {
                const idx = tmpExp.indexOf(op);
                tmpExp.splice(idx - 1, 3, calculate(Number(tmpExp[idx - 1]), Number(tmpExp[idx + 1]), op));
            }
        }

        return Math.abs(tmpExp[0]);
    };

    return Math.max(...operations.map(ops => compute(expression, ops)));
}