export const MyPromiseAll = (promiseArray) => {
    return new Promise((resolve, reject) => {
        let results = []
        let max = promiseArray.length
        let start = 0
        if (max === 0) {
            resolve([]);
            return;
        }
        promiseArray.forEach((value, index) => {
            Promise.resolve(value).then((val) => {
                results[index] = val
                start++
                if (start === max) {
                    resolve(results)
                }
            }).catch((error) => {
                reject(error)

            })
        })
    })
}