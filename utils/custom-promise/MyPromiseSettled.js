export const MyPromiseSettled = (promiseArray) => {

    return new Promise((resolve, reject) => {
        const maxLength = promiseArray.length
        let completed = 0
        let resultArray = []
        if (maxLength === 0) {
            resolve([])
            return
        }
        promiseArray.forEach((element, index) => {
            Promise.resolve(element)
                .then((value) => {
                    completed++
                    resultArray[index] = {
                        status: 'resolved',
                        result: value
                    }
                    if (completed === maxLength) {
                        resolve(resultArray)
                    }
                },
                    (error) => {
                        completed++
                        resultArray[index] = {
                            status: 'rejected',
                            reason: error
                        }
                        if (completed === maxLength) {
                            resolve(resultArray)
                        }
                    })
        });


    })
} 