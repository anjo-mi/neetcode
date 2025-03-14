class Solution {
    /*
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        return  this.checkRows(board) &&
                this.checkColumns(board) && 
                this.checkSquares(board);
    }

    checkRows(board){
        const nums = '0123456789'
        for (let i = 0 ; i < 9 ; i++){
            const numbers = board[i].filter(num => nums.includes(num.toString()));
            if (new Set(numbers).size !== numbers.length) return false;
        }
        return true;
    }

    checkColumns(board){
        for (let i = 0 ; i < 9 ; i++){
            const column = [];
            for (let j = 0 ; j < 9 ; j++){
                if (board[i][j] !== '.') column.push(board[i][j]);
            }
            if (new Set(column).size !== column.length) return false;
        }
        return true;
    }

    checkSquares(board){
        for (let square = 0 ; square < 9 ; square++){
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;
    }
}