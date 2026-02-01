const insert = (array, element) => {
    if (array.length === 0 || array[array.length - 1] < element) {
        array.push(element)
        return
    }

    const last = array.pop()
    insert(array, element)
    array.push(last)
    return array

}

export const sortRecursive = (array) => {
    if (array.length === 0) {
        return []
    }

    const temp = array.pop()
    sortRecursive(array)
    insert(array, temp)
    return array
}



