class StackMaxMin {

    constructor() {
        this.list = []
    }

    push = (item) => {
        if(this.isEmpty()) {
            this.list.push({
                value : item,
                min: item,
                max: item
            })
        } else {
            const {value, max, min} = this.peek()
            const result_min = min > item ? item : min
            const result_max = max > item ? max: item
            this.list.push({
                value : item,
                min: result_min,
                max: result_max
            })
        }
    }

    pop = () => {
       return this.list.pop()
    }

    peek = () => {
        return this.list[this.list.length - 1]
    }

    max = () => {
       return this.list[this.list.length - 1].max
    }

    min = () => {
        return this.list[this.list.length - 1].min
    }

    size = () => {
      return this.list.length
    }

    isEmpty = () => {
        return this.list.length === 0
    }
    
}

export { StackMaxMin }