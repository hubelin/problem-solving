export const solve = (board: string[][]): string[][] => {
  if (board.length === 0 || board[0].length === 0) return board;
  // loop through borders to see if anything is connected
  for (let i = 0; i < board[0].length; i += 1) {
    // loop through the top and bottom border from left to right
    if (board[0][i] === 'O') {
      dfs(board, 0, i);
    }
    if (board[board.length - 1][i] === 'O') {
      dfs(board, board.length - 1, i);
    }
  }
  for (let i = 0; i < board.length; i += 1) {
    // loop through the left and right border from top to bottom
    if (board[i][0] === 'O') {
      dfs(board, i, 0);
    }
    if (board[i][board[0].length - 1] === 'O') {
      dfs(board, i, board[0].length - 1);
    }
  }
  // turn any Os not flipped to X and turn any '#' (connected to an O at a border) to O
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
  return board;
};

function dfs(board: string[][], row: number, col: number) {
  if (!isValid(board, row, col)) return;
  board[row][col] = '#';
  dfs(board, row + 1, col);
  dfs(board, row - 1, col);
  dfs(board, row, col + 1);
  dfs(board, row, col - 1);
}
function isValid(board: string[][], row: number, col: number) {
  return (
    row >= 0 &&
    row < board.length &&
    col >= 0 &&
    col < board[0].length &&
    board[row][col] === 'O'
  );
}
