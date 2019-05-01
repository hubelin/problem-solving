/**
 * @param {string[]} tokens
 * @return {number}
 */

export const evalRPN = (tokens: Array<string>): number => {
  const operands: Array<string> = ['*', '+', '-', '/'];
  const operandStack: Array<string> = [];
  for (let i = 0; i < tokens.length; i += 1) {
    if (operands.includes(tokens[i])) {
      const secondArg = operandStack.pop();
      const firstArg = operandStack.pop();
      const result = Math.floor(eval(`${firstArg}${tokens[i]}${secondArg}`));
      operandStack.push(`${result}`);
    } else {
      operandStack.push(tokens[i]);
    }
  }
  return Number(operandStack.pop());
};
