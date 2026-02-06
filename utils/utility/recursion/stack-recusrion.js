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

const deleteElemnt = (stack, position) => {
    if(position === 1) {
        stack.pop()
        return
    }
    const temp = stack.pop()
    deleteElemnt(stack, position-1)
    stack.push(temp)
}

export const deleteMiddleElementInStack = (stack) => {
    if(stack.length === 0) {
        return stack
    }

   const mid = Math.ceil(stack.length / 2)
   deleteElemnt(stack, mid)
   return stack

}


export const reverseStackUsingRecursion = (stack) => {
    if(stack.length === 0) {
        return
    }
    const temp = stack.pop()
    reverseStackUsingRecursion(stack)
    stack.unshift(temp)
    return stack

}
