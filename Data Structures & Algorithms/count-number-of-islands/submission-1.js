class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let result = 0;

        const track = (i, j) => {
            grid[i][j] = "0";
            if(i > 0 && grid[i - 1][j] === "1") track(i - 1, j);
            if(j > 0 && grid[i][j - 1] === "1") track(i, j - 1);
            if(i < m - 1 && grid[i + 1][j] === "1") track(i + 1, j);
            if(j < n - 1 && grid[i][j + 1] === "1") track(i, j + 1);
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === "1") {
                    track(i, j);
                    result++;
                }
            }
        }
        return result;
    }
}
