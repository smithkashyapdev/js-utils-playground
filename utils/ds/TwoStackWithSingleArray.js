class TwoStackWithSingleArray {

    constructor(capacity) {
        this.size = capacity
        this.top = 0
        this.last = capacity
        this.list = []
    }

    push1 = (item) => {
        if (this.top < this.size) {
            this.list[this.top] = item
            this.top++
            console.log(this.list, 'push1' ,this.top)
            return true
        } else {
            return false
        }
    }

    push2 = (item) => {
        if (this.top < this.last) {
            console.log(this.last, 'last')
            this.last--
            this.list[this.last] = item
            console.log(this.list, 'push2' ,this.top)
            return true
        } else {
            return false
        }
    }

    pop1 = () => {
        if (-1 < this.top) {
            const result = this.list[this.top]
            this.top--
            return result
        } else {
            return null
        }
    }

    pop2 = () => {
        console.log('pop2', this.last, this.top, this.list.length)
        if (this.last < this.size) {
            const result = this.list[this.last]
            this.last++
            return result
        } else {
            return null
        }
    }

}

export { TwoStackWithSingleArray }