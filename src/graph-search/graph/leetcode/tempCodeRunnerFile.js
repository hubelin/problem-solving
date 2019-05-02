const solve = board => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; i < board[i].length; j += 1) {
      if (board[i][j] === 'O') {
        dfs(board, i, j);
      }
    }
  }
  function dfs(board, i, j) {
    if (
      board[i][j] === 'X' ||
      i <= 0 ||
      j <= 0 ||
      i > board.length ||
      j > board[i].length
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
