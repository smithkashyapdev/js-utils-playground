const debounce = (fn, delay) => {
    let timer
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn.bind(this, args), delay)
    }
}


const throttle = (fn, delay) => {
    let lastTime =  0
    return (...args) => {
        const now = Date.now();
        const diff = now - lastTime
        if (diff > delay) {
            lastTime = now
            fn(args)
        }
    }
}

export { debounce, throttle }