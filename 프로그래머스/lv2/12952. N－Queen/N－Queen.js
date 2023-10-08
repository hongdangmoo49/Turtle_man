function solution(n) {
    let count = 0;

    function isSafe(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || Math.abs(board[i] - col) === row - i) {
                return false;
            }
        }
        return true;
    }

    function placeQueen(board, row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;
                placeQueen(board, row + 1);
            }
        }
    }

    placeQueen(new Array(n).fill(-1), 0);

    return count;
}