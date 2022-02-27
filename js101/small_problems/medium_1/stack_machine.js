function push(stack, register) {
  stack.push(register);
  return register;
}
function add(stack, register) {
  register += stack.pop();
  return register;
}
function sub(stack, register) {
  register -= stack.pop();
  return register;
}
function mult(stack, register) {
  register *= stack.pop();
  return register;
}
function div(stack, register) {
  register = Math.floor(register / stack.pop());
  return register;
}
function remainder(stack, register) {
  register = register % stack.pop();
  return register;
}
function print(stack, register) {
  console.log(register);
  return register;
}
function pop(stack, register) {
  return stack.pop();
}

function minilang(input) {
  let ops = input.split(" ");
  let [register, stack] = [0, []];
  const COMMANDS = {PUSH: push, ADD: add, SUB: sub, MULT: mult,
    DIV: div, REMAINDER: remainder, PRINT: print, POP: pop}
  for (let cmd of ops) {
    if (!Number.isNaN(parseInt(cmd))) {
      register = parseInt(cmd);
    } else {
      register = COMMANDS[cmd](stack, register);
    }
  }
}

minilang('3 PUSH PUSH 7 DIV MULT PRINT');

/*
minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');
*/