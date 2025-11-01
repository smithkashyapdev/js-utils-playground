export const ResolvePromiseWithPriority = (promises) => {
    return new Promise((resolve, reject) => {
        const sortedAsPriority = promises.sort((a,b)=> a.priority - b.priority)
        let errorCount = 0
        sortedAsPriority.forEach(({task, priority}, index) => {
            task.then((value) => {
              resolve({ priority, result: value });
            }).catch((error) => {
                errorCount++;
                if (errorCount === sortedAsPriority.length) {
                    reject({ error: "All promises failed" });
                }
            })
        });
    })
}