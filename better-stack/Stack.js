class Stack {
    // Object design
    constructor () {
        this.data = {}
        this.size = 0
    }

    // Methods
    // Push method - adds data to the Stack and increments the size
    push (item) {
        this.data[this.size] = item
        this.size += 1
    }

    // Peak method - returns the first data at the top of the Stack
    peek () {
        return this.data[this.size - 1]
    }

    // Pop method - returns the last data added to the stack
    pop () {
        return this.data[0]
    }

    // Find method - returns data at a specific index provided
    find (index) {
        return this.data[index]
    }

    // All method - returns all the data that has been added to the Stack
    all () {
        return this.data
    }
}
module.exports = Stack