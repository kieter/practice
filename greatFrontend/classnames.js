/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    const result = [];

    args.forEach((arg) => {
        if (!arg) {
            return;
        }

        const argType = typeof arg;


        if (argType === 'string' || argType === 'number') {
            result.push(arg);
            return;
        }

        if (Array.isArray(arg)) {
            result.push(classNames(...arg))
            return;
        }

        if (argType === 'object') {
            Object.entries(arg).forEach((entry) => {
                if (entry[1]) {
                    result.push(entry[0])
                }
            })
            return;
        }

    })
    return result.join(' ')
}