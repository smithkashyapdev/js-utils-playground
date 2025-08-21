export const PromisePool = (tasks = [], limit = 2) => {
    let currentCount = 0
    let activeTask = tasks.length
    let result = []
    return new Promise((resolve, reject) => {
        function execute(){
            let isRequiredToTakeTask = currentCount < limit
        if (isRequiredToTakeTask) {
            const task = tasks.shift() || null
            if (task != null) {
                currentCount++
                task().then((response) => {
                    result.push(response)
                }).catch((e) => {
                    result.push(e)
                }).finally(() => {
                    activeTask--
                    currentCount--;
                    execute();
                });
               
            } else {
                if (activeTask == 0) {
                    resolve(result)
                }
            }
        } else {
            if (activeTask == 0) {
                resolve(result)
            }
        }
        }
        for (let i = 0; i < limit; i++) {
            execute();
        }
    })
}