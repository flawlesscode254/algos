const LinkedList = require("./LinkedList")

const first = new LinkedList()

first.insert(23)
first.insert(33)
first.insert(51)

console.log(JSON.stringify(first, null, 2));