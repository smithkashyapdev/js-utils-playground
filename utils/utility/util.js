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
    let total = a.reduce((acc, val)=> acc + val , 0)
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
