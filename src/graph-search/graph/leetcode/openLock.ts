export const openLock = function(deadends: string[], target: string): number {
  if (target === null) return -1;

  const deadLocks = new Set(deadends);
  if (deadLocks.has('0000')) return -1;
  const visited = new Set();
  const queue = ['0000'];
  let steps = 0;

  while (queue.length) {
    const size = queue.length;

    for (let j = 0; j < size; j++) {
      let curr = queue.shift();
      if (curr) {
        if (visited.has(curr)) continue;

        visited.add(curr);

        if (curr === target) return steps;

        for (let i = 0; i < curr.length; i++) {
          const char = curr.charAt(i);

          const incremented =
            curr.substring(0, i) +
            (char === '9' ? 0 : parseInt(char, 10) + 1) +
            curr.substring(i + 1);

          const decremented =
            curr.substring(0, i) +
            (char === '0' ? 9 : parseInt(char, 10) - 1) +
            curr.substring(i + 1);

          if (!deadLocks.has(incremented)) queue.push(incremented);
          if (!deadLocks.has(decremented)) queue.push(decremented);
        }
      }
    }
    steps += 1;
  }

  return -1;
};
