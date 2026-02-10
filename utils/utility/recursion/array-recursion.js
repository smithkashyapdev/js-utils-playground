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

export const swipeStack = (n, start, aux, dest) => {
    if (n === 1) {
        const disk = start.shift();
        dest.unshift(disk);
        return;
    }

    swipeStack(n - 1, start, dest, aux);
    const disk = start.shift();
    dest.unshift(disk)
    swipeStack(n - 1, aux, start, dest);
}


export const findKthValueInGrammer = (n, k) => {
    if (n === 1) {
        return 0
    }

    const mid = (Math.pow(2, n - 1)) / 2
    if (k > mid) {
        return Number(!(findKthValueInGrammer(n - 1, k - mid)))
    } else {
        return Number((findKthValueInGrammer(n - 1, k - mid)))
    }
}
// 1
// 2
// 3


