const asteroidCollision = (asteroids: number[]): number[] | [] => {
  // only push on positives and deal with negatives
  const stack: number[] = [];
  for (var i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0 || stack.length == 0 || stack[stack.length - 1] < 0) {
      stack.push(asteroids[i]);
    } else if (stack[stack.length - 1] <= -asteroids[i]) {
      if (stack[stack.length - 1] < -asteroids[i]) i--;
      stack.pop();
    }
  }

  return stack;
};
