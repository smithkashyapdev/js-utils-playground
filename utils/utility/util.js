export const memoize = (fn) => {
    let cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

//currying function
export const sumWithLimit = (...a) => {
    let total = a.reduce((acc, val) => acc + val, 0)
    function add(...args) {
        if (args.length === 0) {
            return total
        }
        total += args.reduce((acc, val) => acc + val, 0);
        return add
    }

    return add
}


//concept of valueOf in javascript
//corrcion happens when we try to add object with primitive value
export const sumWithValueOf = (...current) => {
    let sum = current
    function innerSum(...next) {
        sum = sum.concat(next)
        return innerSum
    }

    innerSum.valueOf = function () {
        return sum.reduce((acc, val) => acc + val, 0)
    }
    innerSum.value = innerSum.valueOf()
    return innerSum
}

export const sumtotal = (a) => {
    let total = a
    function add(b) {
        if (b === undefined) {
            return total
        }
        total += b
        return add
    }

    add.valueOf = () => total;
    add.toString = () => String(total);
    add[Symbol.toPrimitive] = () => total;
    return add
}

export const format24HourTime = (time) => {
    let isAm = false
    const lowerTime = time.toLowerCase()
    if (lowerTime.endsWith("am")) {
        isAm = true
    }
    const [hour, min] = lowerTime.replace("am", "").replace("pm", "").split(":")
    if (isAm) {
        const diff = 12 - Number(hour)
        if (diff === 0) {
            return `00:${Number(min)}`
        }
        return `${Number(hour)}:${Number(min)}`
    } else {
        //pm
        if (Number(hour) === 12) {
            return `${Number(hour)}:${Number(min)}`
        }
        let exactH = hour + 12
        return `${Number(exactH)}:${Number(min)}`
    }
    console.log('hour', hour, min)
}



export const format12Hour = (time) => {
    const [hour, min] = time.split(":")
    if (Number(hour) > 11) {
        const hr = hour === '12' ? 12 : Number(hour) - 12
        return `${hr}:${min} PM`
    } else {
        const hr = hour === '00' ? 12 : Number(hour)
        return `${hr}:${min} AM`
    }
}

export const chopArray = (array, size) => {
    const temp = [...array]
    let index = 0
    const result = []
    while (index < temp.length) {
        result.push(temp.slice(index, index + size))
        index = index + size
    }

    return result

}

export const deepFlattenObject = (item, lastKey) => {
    let result = {}
    if (item === undefined) {
        return {}
    }
    for (const [key, value] of Object.entries(item)) {
        if (Array.isArray(value)) {
            value.forEach((val, index) => {
                const newKey = lastKey === undefined ? `${key}[${index}]` : `${lastKey}.${key}[${index}]`
                if (val !== null && typeof val === "object") {
                    deepFlattenObject(val, newKey, result)
                } else {
                    result[`${newKey}`] = val
                }
            })
        } else if (typeof value === 'object') {
            const prefix = lastKey === undefined ? key : `${lastKey}.${key}`
            const proccessed = deepFlattenObject(value, prefix)
            result = { ...result, ...proccessed }
        } else {
            const prefix = lastKey === undefined ? key : `${lastKey}.${key}`
            result[`${prefix}`] = value

        }
    }
    return result
}

export const shallowMerge = (...args) => {
    let target = {}
    const merge = (item) => {
        console.log('item-->', item)
        for (let prop in item) {
            console.log(prop)
            if (item.hasOwnProperty(prop)) {
                target[prop] = item[prop]
            }
        }
    }

    args.forEach((item, index) => {
        merge(item)
    })

    return target

}

export const deepMerge = (...args) => {
    const isObject = (val) =>
        val !== null && typeof val === 'object' && !Array.isArray(val)

    const merge = (target, source) => {
        if (!isObject(source) && !Array.isArray(source)) {
            return source
        }

        if (Array.isArray(source)) {
            return source.map((item) => merge(undefined, item))
        }

        const result = { ...target }

        for (let key in source) {
            if (!Object.prototype.hasOwnProperty.call(source, key)) continue

            const targetVal = result[key]
            const sourceVal = source[key]
            if (isObject(targetVal) && isObject(sourceVal)) {
                result[key] = mergeTwo(targetVal, sourceVal)
            } else if (Array.isArray(sourceVal)) {
                result[key] = sourceVal.map(item => mergeTwo(undefined, item))
            } else {
                result[key] = sourceVal
            }
        }

        return result
    }
    return args.reduce((acc, val) => merge(acc, val), {})
}

export const deepSeal = (item) => {
    if (item === null || typeof item !== 'object') {
        return item
    }

    const properties = Object.getOwnPropertyNames(item)
    for (const key of properties) {
        if (Array.isArray(item[key])) {
            item[key].forEach((listItem) => deepSeal(listItem))
        }
        else if (typeof item[key] === 'object') {
            deepSeal(item[key])
        }

    }

    return Object.seal(item)

}

export const deepFreeze = (item) => {
    if (item === null || typeof item !== 'object') {
        return item
    }

    const properties = Object.getOwnPropertyNames(item)
    for (const key of properties) {
        if (Array.isArray(item[key])) {
            item[key].forEach((listItem) => deepFreeze(listItem))
        }
        else if (typeof item[key] === 'object') {
            deepFreeze(item[key])
        }

    }

    return Object.freeze(item)
}

export const BrowserHistory = () => {
    function Node() {
        this.next = null
        this.prev = null
        this.curr = null
    }
    let tailNode = null
    let headNode = null
    let currentNode = null
    const visit = (url) => {
        const mNode = new Node()
        mNode.curr = `--> ${url}`
        if (tailNode != null) {
            tailNode.next = mNode
            mNode.prev = tailNode
            tailNode = mNode
        }

        if (headNode === null) {
            headNode = mNode
            tailNode = mNode
        }
        currentNode = mNode
    }

    const backward = () => {
        if (currentNode != null) {
            if (currentNode.prev != null) {
                const prevNode = currentNode.prev
                currentNode = prevNode
            }
        }
        return current()
    }

    const forward = () => {
        if (currentNode != null) {
            if (currentNode.next != null) {
                const nextNode = currentNode.next
                currentNode = nextNode
            }
        }
        return current()
    }

    const current = () => {
        if (currentNode != null) {
            return currentNode.curr
        }
        return undefined
    }

    return {
        current,
        visit,
        forward,
        backward
    }

}

export const GroupBy = (list, keyFinder) => {
    return list.reduce((acc, item) => {
        const key = typeof keyFinder === 'function' ? keyFinder(item) : item[keyFinder]
        if (!acc[key]) {
            acc[key] = [item]
        } else {
            acc[key] = [...acc[key], item]
        }

        return acc
    }, {})
}

export const deepEqual = (a, b) => {
    if (Object.is(a, b)) return true

    if (a === null || b === null) return false
    if (typeof a !== 'object' || typeof b !== 'object') return false

    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) return false
        return a.every((v, i) => deepEqual(v, b[i]))
    }

    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) return false

    return keysA.every(key =>
        Object.prototype.hasOwnProperty.call(b, key) &&
        deepEqual(a[key], b[key])
    )
}

export const addArrayListener = (arr) => {
    const arrayProtoWithEvent = Object.create(Array.prototype)
    arrayProtoWithEvent.listeners = new Map()

    arrayProtoWithEvent.addListener = function (key, cb) {
        const list = this.listeners.has(key) ? this.listeners.get(key) : []
        list.push(cb)
        this.listeners.set(key, list)
    }

    arrayProtoWithEvent.pushWithEvent = function (key, value) {
        const list = this.listeners.has(key) ? this.listeners.get(key) : []
        this.push(value)
        list.forEach((item) => item(key, value, this))
    }

    arrayProtoWithEvent.popWithEvent = function (key) {
        const list = this.listeners.has(key) ? this.listeners.get(key) : []
        const last = this.pop()
        list.forEach((item) => item(key, last, this))
    }

    arrayProtoWithEvent.triggerEvent = function (key, ...args) {
        const list = this.listeners.has(key) ? this.listeners.get(key) : []
        list.forEach((item) => item(args))
    }

    arrayProtoWithEvent.removeListener = function (key, cb) {
        const list = this.listeners.has(key) ? this.listeners.get(key) : []
        const index = list.findIndex((item) => Object.is(cb, item))
        list.splice(index, 1)
    }


    Object.setPrototypeOf(arr, arrayProtoWithEvent)
}



export const createTree = (array) => {
    const result = []
    console.log(array)
    array.forEach((item) => {
        const [child, parent] = item
        const start = `${parent}->${child}`
        const value = makeCycle([...array], start)
        result.push(value)
    })

    return result
}

const makeCycle = (array, elementString) => {
    if (array.length === 0) {
        return elementString
    }

    const end = array.pop()
    const value = makeCycle(array, elementString)
    const [child, parent] = end
    let cycleString = ""
    if (value.startsWith(child)) {
        cycleString = parent.concat("->").concat(value)
    }else {
        cycleString = value
    }
    return cycleString
}

