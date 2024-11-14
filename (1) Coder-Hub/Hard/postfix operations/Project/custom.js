function postFix(expression) {
  const stack = [];
  const tokens = expression.split(" ");

  for (let token of tokens) {
      if (!isNaN(token)) {
          // If it's a number, push it to the stack
          stack.push(Number(token));
      } else {
          // If it's an operator, pop two numbers from the stack
          const b = stack.pop();
          const a = stack.pop();
          
          // Apply the operator and push the result back onto the stack
          switch (token) {
              case '+':
                  stack.push(a + b);
                  break;
              case '-':
                  stack.push(a - b);
                  break;
              case '*':
                  stack.push(a * b);
                  break;
              case '/':
                  stack.push(a / b);
                  break;
              default:
                  throw new Error("Unsupported operator: " + token);
          }
      }
  }

  // The result should be the only item left in the stack
  return stack.pop();
}

console.log(postFix("6 2 / 3 +"));