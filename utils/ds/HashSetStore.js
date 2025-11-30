class HashSet {
    constructor() {
        this.list = {}
    }

    set(key, value) {
        this.list[key] = value
    }

    get(key) {
        return this.list[key]
    }

    has(key) {
        return Object.keys().includes(key)
    }
}

export { HashSet }
