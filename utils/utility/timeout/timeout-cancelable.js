const timeout = window.setTimeout;
window.setTimeout = function (callback, delay, ...args) {
    const wrappedCallback = function () {
        if (!wrappedCallback.canceled) {
            callback(...args);
        }
    };

    const timeoutId = timeout(wrappedCallback, delay);
    wrappedCallback.cancel = () => {
        wrappedCallback.canceled = true;
        clearTimeout(timeoutId);
    };

    return { timeoutId, cancel: wrappedCallback.cancel };
}