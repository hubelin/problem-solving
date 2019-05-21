/*
https://leetcode.com/problems/n-queens/

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],
*/

const solveNQueens = (n: number) => {
  if (n === 0) return 0;

  const board = Array(n)
    .fill(0)
    .map(() => Array(n).fill('.'));
  const result: string[][] = [];
  const backtrack = (board: string[][], col: number) => {
    if (col >= board.length) {
      const list = [];
      for (let i = 0; i < board.length; i += 1) {
        let str = '';
        for (let j = 0; j < board.length; j += 1) {
          str += board[i][j];
        }
        list.push(str);
      }
      result.push(list);
      return;
    }
    for (let row = 0; row < board.length; row += 1) {
      if (board[row][col] === '.') {
        if (isSafe(board, row, col)) {
          board[row][col] = 'Q';
          backtrack(board, col + 1);
          board[row][col] = '.';
        }
      }
    }
  };
  backtrack(board, 0);
  return result;
};

const isSafe = (board: string[][], row: number, col: number) => {
  for (let i = 0; i <= col; i += 1) {
    if (board[row][i] === 'Q') return false;
  }
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
    if (board[i][j] === 'Q') return false;
  }
  return true;
};

console.log(solveNQueens(4));
