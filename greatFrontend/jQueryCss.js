/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
    const element = document.querySelector(selector);

    return {
        css: function(property, value) {
            if (value === undefined) {
                if (element === null) {
                    return undefined;
                }
                if (element.style[property] === "") {
                    return undefined
                }
                return element.style[property]
            }

            if (element !== null) {
                element.style[property] = value;
            }
            return this;
        }
    };
}