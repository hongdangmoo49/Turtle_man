function solution(relation) {
    const cols = relation[0].length;
    const rows = relation.length;
    const sets = 1 << cols;
    const candidateKeys = [];

    for (let i = 1; i < sets; i++) {
        const tmpSet = new Set();
        
        for (let row = 0; row < rows; row++) {
            let tmp = '';
            for (let col = 0; col < cols; col++) {
                if (i & (1 << col)) {
                    tmp += relation[row][col] + ',';
                }
            }
            tmpSet.add(tmp);
        }
        
        if (tmpSet.size === rows) {
            let isMinimal = true;
            for (const key of candidateKeys) {
                if ((key & i) === key) {
                    isMinimal = false;
                    break;
                }
            }
            if (isMinimal) candidateKeys.push(i);
        }
    }

    return candidateKeys.length;
}
