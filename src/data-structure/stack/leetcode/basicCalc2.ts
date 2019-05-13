/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero
*/

/**
 * @param {string} s
 * @return {number}
 */

const covertToPostfix = (tokens: string): any[] => {
  const precendence: { [key: string]: number } = {
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
    '(': 1
  };
  const DIGITS = '0123456789';
  const operationStack = [];
  const postfix = [];
  const splitTokens = tokens.split('');
  for (let token of splitTokens) {
    if (DIGITS.indexOf(token) > -1) {
      postfix.push(token);
    } else if (token === '(') {
      operationStack.push(token);
    } else if (token === ')') {
      let topToken = operationStack.pop();
      while (topToken !== '(') {
        postfix.push(topToken);
        topToken = operationStack.pop();
      }
    } else {
      if (token !== ' ') {
        while (
          operationStack.length > 0 &&
          precendence[operationStack[-1]] >= precendence[token]
        ) {
          postfix.push(operationStack.pop());
        }
        operationStack.push(token);
      }
    }
  }

  while (operationStack.length > 0) {
    postfix.push(operationStack.pop());
  }
  return postfix;
};

console.log(covertToPostfix('(1 + 2 ) * 3'));

const calculate = (s: string): string | number => {
  const postfixResult = covertToPostfix(s);
  const evalStack: (string | number)[] = [];
  for (let i = 0; i < postfixResult.length; i += 1) {
    const token = postfixResult[i];
    let firstArg = null;
    let secondArg = null;
    switch (token) {
      case token === '+':
        secondArg = evalStack.pop();
        firstArg = evalStack.pop();
        evalStack.push(Number(firstArg) + Number(secondArg));
      case token === '-':
        secondArg = evalStack.pop();
        firstArg = evalStack.pop();
        evalStack.push(Number(firstArg) - Number(secondArg));
      case token === '/':
        secondArg = evalStack.pop();
        firstArg = evalStack.pop();
        evalStack.push(Number(firstArg) / Number(secondArg));
      case token === '*':
        secondArg = evalStack.pop();
        firstArg = evalStack.pop();
        evalStack.push(Number(firstArg) * Number(secondArg));
      default:
        evalStack.push(token);
    }
  }
  return evalStack[0];
};
