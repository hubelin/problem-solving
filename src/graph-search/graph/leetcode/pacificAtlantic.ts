/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix: number[][]) {
  const result: number[][] = [];
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return result;
  const m = matrix.length;
  const n = matrix[0].length;

  const pacific = Array.from(Array(m), () => new Array(n).fill(false));
  const atlantic = Array.from(Array(m), () => new Array(n).fill(false));

  for (let i = 0; i < m; i += 1) {
    dfs(matrix, pacific, i, 0, -Infinity);
    dfs(matrix, atlantic, i, n - 1, -Infinity);
  }
  for (let j = 0; j < n; j += 1) {
    dfs(matrix, pacific, 0, j, -Infinity);
    dfs(matrix, atlantic, m - 1, j, -Infinity);
  }
  for (let i: number = 0; i < m; i++) {
    for (let j: number = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

var isValid = function(matrix: number[][], i: number, j: number) {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length;
};

var dfs = function(
  matrix: number[][],
  ocean: boolean[][],
  i: number,
  j: number,
  height: number
) {
  if (!isValid(matrix, i, j)) return;
  if (ocean[i][j]) return; //visited already
  if (matrix[i][j] < height) return; // sea level not enough
  ocean[i][j] = true;
  dfs(matrix, ocean, i + 1, j, matrix[i][j]);
  dfs(matrix, ocean, i - 1, j, matrix[i][j]);
  dfs(matrix, ocean, i, j + 1, matrix[i][j]);
  dfs(matrix, ocean, i, j - 1, matrix[i][j]);
};

var matrix = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
];

console.log(pacificAtlantic(matrix));
