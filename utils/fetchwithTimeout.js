export const fetchWithTimeout = (url, options = {}, timeout = 5000) => {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();
        const signal = controller.signal;
        const timer = setTimeout(() => {
            controller.abort();
            reject(new Error("Fetch request timed out"));
        }, timeout);
        fetch(url, { ...options, signal })
            .then(response => {
                clearTimeout(timer);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                resolve(response.json());
            })
            .catch(error => {
                clearTimeout(timer);
                reject(error)
            });
    })
}