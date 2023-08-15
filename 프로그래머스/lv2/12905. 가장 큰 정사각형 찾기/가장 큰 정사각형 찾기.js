const solution = (board) => {
    const row = board.length;
    const col = board[0].length;
    let maxSide = 0;

    if (row === 1 || col === 1) {
        return Math.max(...board.flat());
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
                maxSide = Math.max(maxSide, board[i][j]);
            }
        }
    }

    return maxSide ** 2;
}