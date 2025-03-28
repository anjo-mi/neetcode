// params: array of length 9, each element being a nested array of length 9
    // each individual element is '.' string, or 1-9 as a string
// return: true if rules** of sudoku are followed accordingly, false if not
// examples: Input: board = 
    // [["1","2",".",".","3",".",".",".","."],
    // ["4",".",".","5",".",".",".",".","."],
    // [".","9","8",".",".",".",".",".","3"],
    // ["5",".",".",".","6",".",".",".","4"],
    // [".",".",".","8",".","3",".",".","5"],
    // ["7",".",".",".","2",".",".",".","6"],
    // [".",".",".",".",".",".","2",".","."],
    // [".",".",".","4","1","9",".",".","8"],
    // [".",".",".",".","8",".",".","7","9"]]

    // Output: true
    
    // Input: board = 
    // [["1","2",".",".","3",".",".",".","."],
    // ["4",".",".","5",".",".",".",".","."],
    // [".","9","1",".",".",".",".",".","3"],
    // ["5",".",".",".","6",".",".",".","4"],
    // [".",".",".","8",".","3",".",".","5"],
    // ["7",".",".",".","2",".",".",".","6"],
    // [".",".",".",".",".",".","2",".","."],
    // [".",".",".","4","1","9",".",".","8"],
    // [".",".",".",".","8",".",".","7","9"]]

    // Output: false




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
                    console.log({square,i,j,row,col})
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;
    }
}


console.log(new Solution().isValidSudoku([["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]));

// Output: true

// console.log(new Solution().isValidSudoku([["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","1",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]))

// Output: false