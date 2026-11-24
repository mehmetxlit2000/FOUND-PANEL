function QuasarRemoveSetInterval(){
    if (!window.__originalSetInterval) {
        window.__intervals = new Map();
        window.__originalSetInterval = window.setInterval;
        window.__originalClearInterval = window.clearInterval;
        window.setInterval = function(callback, delay, ...args) {
            const id = window.__originalSetInterval(callback, delay, ...args);
            window.__intervals.set(id, {
                callback: callback,
                delay: delay,
                createdAt: new Date().toLocaleTimeString()
            });
            return id;
        };

        window.clearInterval = function(id) {
            window.__intervals.delete(id);
            return window.__originalClearInterval(id);
        };
    }
    window.__intervals.forEach((data, id) => {
        clearInterval(id);
    });
    window.__intervals.clear();
}