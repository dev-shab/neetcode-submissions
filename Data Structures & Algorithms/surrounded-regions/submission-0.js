class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length;
        const n = board[0].length;

        const track = (i, j) => {
            board[i][j] = "A";
            if(i > 0 && board[i - 1][j] === "O") track(i - 1, j);
            if(j > 0 && board[i][j - 1] === "O") track(i, j - 1);
            if(i < m - 1 && board[i + 1][j] === "O") track(i + 1, j);
            if(j < n - 1 && board[i][j + 1] === "O") track(i, j + 1);
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if((i === 0 || i === m - 1) && board[i][j] === "O") {
                    track(i, j);
                }
                if((j === 0 || j === n - 1) && board[i][j] === "O") {
                    track(i, j);
                }
            }
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][j] === "O") board[i][j] = "X";
                if(board[i][j] === "A") board[i][j] = "O";
            }
        }
    }
}
