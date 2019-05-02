/*
 https://leetcode.com/problems/surrounded-regions/
 Problem statement: Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.

Input : 
X X X X
X O O X
X X O X
X O X X

Output:
X X X X
X X X X
X X X X
X O X X

Constraints: O lying on the border should not be flipped [0][i] || [j][0]
*/

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board: string[][]): void => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === 'O') {
        dfs(board, i, j);
      }
    }
  }
  function dfs(board: string[][], i: number, j: number) {
    if (
      board[i][j] === 'X' ||
      i <= 0 ||
      j <= 0 ||
      i >= board.length ||
      j >= board[i].length
    ) {
      return;
    }
    board[i][j] = 'X';
    dfs(board, i + 1, j);
    dfs(board, i - 1, j);
    dfs(board, i, j + 1);
    dfs(board, i, j - 1);
  }
  console.log(board);
};
const board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
];
console.log(solve(board));
