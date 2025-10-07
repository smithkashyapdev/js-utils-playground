export const MyPromiseRace = (values) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(values)) {
            throw new TypeError("Input must be an array");
        }

        if (values.length === 0) {
            reject(new Error("Empty array"));
            return;
        }

        values.forEach((element) => {
            Promise.resolve(element)
                .then((val) => { resolve(val) })
                .catch((error) => { reject(error) })
        });
    })
}