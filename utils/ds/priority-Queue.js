function PriorityQueue() {
    let list = []

    function PriorityElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    function enqueue(item) {
        let inserted = false;

        for (let index = 0; index < this.list.length; index++) {
            const element = this.list[index];
            if (item.priority > element.priority) {
                this.list.splice(index, 0, item);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            this.list.push(item);
        }

    }



    function dequeue() {
        return this.list.shift()
    }

    function front() {
        return this.list[0]
    }

    function rear() {
        return this.list[this.list.length - 1]

    }

    function size() {
        return this.list.length
    }

    function isEmpty() {
        return this.list.length <= 0
    }


}