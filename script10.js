function checkBrackets(str) {
    const stack = [];
    const opbr = ['(', '{', '['];
    const clbr = [')', '}', ']'];
    
    for (let char of str) {
        if (opbr.includes(char)) {
            stack.push(char);
        } else if (clbr.includes(char)) {
            const lastOp = stack.pop();
            const corrOp = opbr[clbr.indexOf(char)];
            if (lastOp !== corrOp) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
  

console.log(checkBrackets("function someFn() { return (true) }"));
console.log(checkBrackets("function someFn() { return (true }"));
console.log(checkBrackets("function someFn() { return true } )"));