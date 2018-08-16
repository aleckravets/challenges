module.exports = class Deferred {
    constructor() {
        this.callbacks = [];
    }

    then(callback) {
        this.callbacks.push(callback);
    }

    resolve(value) {
        let d;
        for (let i = 0; i < this.callbacks.length; i++) {
            if (d) {
                d.then(this.callbacks[i]);
            }
            else {
                let res = this.callbacks[i](value);
                if (res instanceof Deferred)
                    d = res;
                else
                    value = res;
            }
        }
    }
};