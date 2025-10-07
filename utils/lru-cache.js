class LruNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LruCache {
    constructor(maxSize = 3) {
        this.maxSize = maxSize;
        this.cache = new Map();
        this.head = new LruNode(null, null);
        this.tail = new LruNode(null, null);
        this.head.next = this.tail
        this.head.prev = null
        this.tail.prev = this.head
        this.tail.next = null
    }

    #moveToHead(node) {
        if (this.head === node) {
            return;
        }

        node.next = this.head
        this.head.prev = node
        this.head = node

    }

    #_remove(node) {
        let prevNode = node.prev
        prevNode.next = null
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.cache.delete(key);
            this.cache.set(key, node);
            this.#moveToHead(node)
        } else {
            if (this.cache.size >= this.maxSize) {
                const lru = this.tail.prev;
                this._remove(lru);
                this.cache.delete(lru.key);
            }
            const newNode = new LruNode(key, value);
            this.cache.set(key, newNode);
            this.#moveToHead(newNode)
        }
    }

    delete(key) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            return true;
        }
        return false;
    }

    clear() {
        this.cache.clear();
    }
}