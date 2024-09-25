/**
 * @param {number} value
 * @return {Function}
 */
export default function sum(value) {
    let total = value;
    function nextSum(nextValue) {
        if (nextValue === undefined) {
            return total;
        } else {
            total += nextValue;
            return nextSum;
        }
    }
    return nextSum;
}