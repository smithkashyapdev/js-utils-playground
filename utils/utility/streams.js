class Streams {
    constructor() {
        this.streams = new Array()
    }

    subscribe(stream) {
        this.streams.push(stream)
    }

    push(data) {
        this.streams.forEach((stream) => {
            stream(data)
        })
    }

    clear() {
        this.streams = new Array()
    }
}

export default Streams