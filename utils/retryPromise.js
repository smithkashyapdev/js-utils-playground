export const retryPromise = (fn, retries = 3, delay = 1000) => {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            fn()
                .then(resolve)
                .catch((error) => {
                    if(n === 0) {
                        reject(error);
                    } else {
                        setTimeout(() => {
                             attempt(n - 1);
                        }, delay)
                    }
                });
        };
        attempt(retries);
    });
}