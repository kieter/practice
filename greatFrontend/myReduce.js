/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (initialValue === undefined) {
        throw new Error("missing initial value")
    }
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {

        accumulator = callbackFn.call(this, accumulator, this[i], i, this)
    }
    return accumulator;
};