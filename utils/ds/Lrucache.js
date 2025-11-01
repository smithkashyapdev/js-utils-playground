class Node {
    constructor(value) {
        this.head = null
        this.prev = null
        this.value = value
    }

}

class LruCache {

    constructor(capacity) {
        this.map = new Map()
        this.capacity = capacity
        this.current = 0
        this.head = null
        this.tail = null
    }

    

    get(key) {
        const node = this.map.get(key)
        console.log('put', node.value)
        if (this.head && node) {
            node.prev.next = node.next
            node.next.prev = node.prev
            this.head.prev = node
            node.next = this.head
            this.head = node
            return node.value
        } else {
            return ""
        }
    }

    put(key, value) {
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {

            if (this.capacity === this.current) {
                console.log(this.tail.value)
                 this.current--
                 this.tail.prev.next = null
                 this.tail = this.tail.prev
            }
            let current = this.head;

            // while (current.next) {
            //     console.log(current.data);
            //     current = current.next;
            // }
            node.next = current
            current.prev = node
            node.prev = null
            this.head = node
            this.map.set(key, node)
        }
        this.current++
    }

    remove(key) {
        const node = this.map.get(key)
        node.prev.next = node.next
        this.map.delete(key)
    }

    all() {
        let current = this.head
        while (current) {
            console.log('==>', current.value)
            current = current.next
        }
    }

}


export { Node, LruCache }