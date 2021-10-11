const Stack = require("./Stack")

const first = new Stack()

first.push(45)
first.push(55)
first.push(65)

const result = first.peek()
const final = first.pop()
const check = first.find(1)
const everything = first.all()

console.log(result);
console.log(final);
console.log(check);
console.log(everything);