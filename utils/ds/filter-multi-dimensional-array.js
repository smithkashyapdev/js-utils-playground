const filterMultiDimensionalArray = (array, test) => {
    const result = []
    array.forEach(element => {
        if (Array.isArray(element)) {
            const res = filterMultiDimensionalArray(element, test)
            result.push(res)
        } else {
            if (test(element)) {
                result.push(element)
            }
        }
    })
    return result
}

export { filterMultiDimensionalArray }