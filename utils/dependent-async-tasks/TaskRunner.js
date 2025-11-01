class Task {
    constructor(id, deps, runable) {
        this.id = id
        this.deps = deps
        this.runable = runable
    }

}

const TaskRunner = (taskList) => {
    let dependencyResult = new Map()
    const taskInitiate = (task) => {
        const id = task.id
        const dependencies = task.deps
        const runnable = task.runable
        if (dependencyResult.has(id)) return dependencyResult.get(id);

        if (dependencies.length === 0) {
            const result = Promise.resolve(runnable()).then((val) => {
                console.log(`Completed: ${id}`);
                return val;
            });
            dependencyResult.set(id, result);
            return result;
        }
        const depPromises = dependencies.map((dep) => taskInitiate(dep));
        const result = Promise.all(depPromises)
            .then(() => runnable())
            .then((val) => {
                console.log(`Completed (after deps): ${id}`);
                return val;
            });
        dependencyResult.set(id, result);
        return result;
    }

    return new Promise((resolve, reject) => {
        if (!taskList.length) {
            reject("No tasks available.");
            return;
        }

        Promise.all(taskList.map((task) => taskInitiate(task)))
            .then(() => resolve("All tasks completed"))
            .catch(reject);
    });
}

export { TaskRunner, Task }