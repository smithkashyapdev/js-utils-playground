export const MyPromiseAny = (promiseArray) => {

    return new Promise((resolve, reject) => {
        let resultError = []
        let maxlength = promiseArray.length
        let complete = 0
        if (maxlength === 0) {
            reject(new AggregateError([], "All promises were rejected"));
            return;
        }
        promiseArray.forEach((element, index) => {
            Promise.resolve(element)
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                  
                    complete++
                    resultError[index] = error
                      console.log('error', error, complete, maxlength)
                    if (complete === maxlength) {
                        console.log('final')
                        reject(new AggregateError(resultError, "All promises were rejected"));
                    }
                })
        });
    })
}