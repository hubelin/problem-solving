/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) return true;
    }
  }
  return false;
};

const dfs = (
  board: string[][],
  i: number,
  j: number,
  position: number,
  word: string
): boolean => {
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[position]
  )
    return false;
  if (position === word.length) return true;
  const unchoose = board[i][j];
  board[i][j] = '#';
  if (dfs(board, i + 1, j, position + 1, word)) return true;
  if (dfs(board, i - 1, j, position + 1, word)) return true;
  if (dfs(board, i, j + 1, position + 1, word)) return true;
  if (dfs(board, i, j - 1, position + 1, word)) return true;
  board[i][j] = unchoose;
  return false;
};
