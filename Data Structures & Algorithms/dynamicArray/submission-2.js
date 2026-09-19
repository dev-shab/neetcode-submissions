class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.length = 0;
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length === this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const result = this.arr[this.length - 1];
        delete this.arr[this.length - 1];
        this.length--;
        return result;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.arr = this.arr.concat(new Array(this.capacity))
        this.capacity *= 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.arr.length;
    }
}
