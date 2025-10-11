export const MapSerial = (input, cb) => {
    return new Promise((resolve, reject)=>{
        let completed = 0
        const resultArray = []
        const total = input.length
        const next = (item, array)=>{
            cb(item, (error, res)=>{
                if(error) {
                    reject(error)
                } else {
                    resultArray.push(res)
                    completed++
                    if(total === completed) {
                        resolve(resultArray)
                    } else{
                        const item = array.shift()
                        next(item, array)
                    }
                }
            })
        }
        const item = input.shift()
        next(item, input)
    })
}