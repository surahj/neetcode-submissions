class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const v = board[row][col]

                if (v === ".") continue;

                const rowSig = `${row}(${v})`
                const colSig = `(${v})${col}`

                const boxRow = Math.floor(row / 3);
                const boxCol = Math.floor(col / 3);

                const boxSig = `${boxRow}(${v})${boxCol}`

                if (seen.has(rowSig) || seen.has(colSig) || seen.has(boxSig)) {
                    return false
                }

                seen.add(rowSig)
                seen.add(colSig)
                seen.add(boxSig)
            }
        }

        return true
    }
}
