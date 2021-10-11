class Stack {
    constructor () {
        this.data = {}
        this.size = 0
    }

    push (item) {
        this.data[this.size] = item
        this.size += 1
    }

    peek () {
        return this.data[this.size - 1]
    }
}

module.exports = Stack