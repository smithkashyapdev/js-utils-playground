const insert = (stack, element) =>  {
    if(stack.length === 0 || stack[0] < element) {
        stack.unshift(element)
        return
    }

    const temp = stack.shift()
    insert(stack, element)
    stack.unshift(temp)

    return stack
}

export const stackSortRecursive = (stack) => {
    if(stack.length === 0) {
        return stack
    }
    const temp = stack.shift()
    stackSortRecursive(stack)
    insert(stack, temp)
    return stack
}