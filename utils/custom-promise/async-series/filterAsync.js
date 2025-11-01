export const FilterAsync = (input, cb) => {
    return new Promise((resolve, reject) => {
        let completed = 0
        let total = input.length
        const result = []
        if (input.length === 0) return resolve([]);
        input.forEach((element, index) => {
            cb(element, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    if (res) {
                        result[index] = element
                    }
                    completed++
                    if (completed === total) {
                        resolve(result.filter(Boolean))
                    }
                }
            })
        });

    })
}