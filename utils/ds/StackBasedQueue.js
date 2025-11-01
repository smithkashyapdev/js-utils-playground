class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return null;
        return this.items.pop();
    }

    peek() {
        if (this.items.length > 0) {
            return this.items[0];
        }
        return undefined

    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


class StackBasedQueue {

    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue = (value) => {
        if (this.stack1.isEmpty()) {
            this.stack1.push(value)
        } else {
            let i = 0
            let total = this.stack1.size()
            while (i < total) {
                this.stack2.push(this.stack1.pop())
                i++
            }
            this.stack1.push(value)
            console.log('val', this.stack1)
            let secondi = 0
            let secondtotal = this.stack2.size()
            while (secondi < secondtotal) {
                this.stack1.push(this.stack2.pop())
                secondi++
            }

        }

    }

    dequeue = () => {
        console.log('dequeue', this.stack1)
        return this.stack1.pop()
    }

    peek = () => {
        console.log('peek', this.stack1)
        return this.stack1.peek()
    }
}

export { StackBasedQueue }