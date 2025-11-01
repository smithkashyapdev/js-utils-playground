export const AutoIncrementer = (initial = 0, step = 1) => {
    let intervalID = undefined
    let startInitial = initial
    let stepValue = step

    const start = (cb) => {
        intervalID = setInterval(() => {
            console.log('this', this)
            startInitial += 1
            console.log(startInitial)
        }, stepValue)
    }

    const stop = () => {
        if (intervalID) {
            //console.log('stop', intervalID)
            clearInterval(intervalID)
        }
        intervalID = null
    }

    return { start, stop }
}