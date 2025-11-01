class Queue {
    constructor() {
        this.list = []
    }

    enqueue = (value) => {
        this.list.push(value)
    }

    dequeue = () => {
       return this.list.shift()
    }

    front = () => {
        if (this.list.length > 0) {
            return this.list[0];
        }
        return undefined
    }

    isEmpty = () => {
        return this.list.length === 0
    }

    size = () => {
        return this.list.length
    }

}

class QueueBasedStack {

    constructor() {
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }

    push = (value) => {
        if (this.queue1.isEmpty()) {
            this.queue1.enqueue(value)
        } else {
            let i = 0;
            let total = this.queue1.size()

            while (i < total) {
                const res = this.queue1.dequeue()
                this.queue2.enqueue(res)
                i++
            }
            this.queue1.enqueue(value)
            let secondi = 0;
            let secondtotal = this.queue2.size()

            while (secondi < secondtotal) {
                this.queue1.enqueue(this.queue2.dequeue())
                secondi++
            }
        }

        console.log(this.queue1.list)
    }

    pop = () => {0
        return this.queue1.dequeue()
    }


}

export { QueueBasedStack }