let exp =  '5 1 2 + 4 * + 3 -'.split(" ")

exp = exp.map(i =>  {return Number(i) ? Number(i) : i})

console.log(calculate(exp))

function calculate (exp) {
  let calc = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "*" : (a, b) => a * b,
    "/" : (a, b) => a / b
  }

  let stack = []

  exp.forEach(op => {
    stack.push ( 
      calc[op] 
        ? calc[op](...stack.splice(-2))
        : op
      )
  });

  return stack
}