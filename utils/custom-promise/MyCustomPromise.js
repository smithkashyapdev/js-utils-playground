export class MyCustomPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilled = [];
        this.onRejected = [];

        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                queueMicrotask(() => {
                    this.onFulfilled.forEach(fn => fn(value));
                })
            }
        };

        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;
                queueMicrotask(() => {
                    this.onRejected.forEach(fn => fn(reason));
                })
            }
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === "fulfilled") onFulfilled(this.value);
        else if (this.state === "rejected") onRejected(this.reason);
        else {
            this.onFulfilled.push(onFulfilled);
            this.onRejected.push(onRejected);
        }
    }

    catch(onRejected) {
        if (this.state === "rejected") onRejected(this.reason);
        else {
            this.onRejected.push(onRejected);
        }
    }
}
