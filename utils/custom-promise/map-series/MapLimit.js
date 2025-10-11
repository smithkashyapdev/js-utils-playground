export const MapLimitBatch = (input, limit, cb) => {
    return new Promise((resolve, reject) => {
        let completed = 0
        let running = 0
        const resultArray = []
        const total = input.length
        let index = -1
        const next = (item, array, pos) => {
            cb(item, (error, res) => {
                if (error) {
                    reject(error)
                } else {
                    resultArray[pos] = res
                    completed++
                    running--
                    console.log(pos)
                    if (total === completed) {
                        resolve(resultArray)
                    } else {
                        if (running ) {
                            const spliced = array.splice(0, limit)
                            spliced.forEach((element) => {
                                running++
                                index++
                                next(element, input, index)
                            });
                        }
                    }
                }
            })
        }
        const spliced = input.splice(0, limit)
        spliced.forEach((element) => {
            running++
            index++
            next(element, input, index)
        });
    })
}