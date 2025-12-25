const timeout = window.setTimeout
const timeoutids = []
window.setTimeout =  function (cb, delay, ...args) {
    const id = timeout(cb, delay, ...args)
    timeoutids.push(id)
    return id
}

export function clearAllTimeout() {
    while(timeoutids.length) {
        const id = timeoutids.pop()
        clearTimeout(id)
    }
}