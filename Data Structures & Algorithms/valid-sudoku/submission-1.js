class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < 9; i++) {
            const colSet = new Set();
            const rowSet = new Set();
            for(let j = 0; j < 9; j++) {
                console.log(rowSet, colSet)
                if(board[i][j] !== ".") {
                    if(rowSet.has(board[i][j])) return false;
                    rowSet.add(board[i][j]);
                }
                if(board[j][i] !== ".") {
                    if(colSet.has(board[j][i])) return false;
                    colSet.add(board[j][i]);
                }
            }
        }
        for(let i = 0; i < 9; i = i + 3) {
            for(let j = 0; j < 9; j = j + 3) {
                const boxSet = new Set();
                for(let k = i; k < i + 3; k++) {
                    for(let l = j; l < j + 3; l++) {
                        if(board[k][l] !== ".") {
                            if(boxSet.has(board[k][l])) return false;
                            boxSet.add(board[k][l]);
                        }
                    }
                }
            }
        }
        return true;
    }
}
