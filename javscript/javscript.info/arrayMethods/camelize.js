String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const camelize = (text) => {
    const textArray = text.split("-");
    const camelizedArray = textArray.map((word, index) => {
        if (index !== 0) {
            return word.capitalize();
        }
        return word;
    });
    return camelizedArray.join("");
};

// camelize("background-color") === 'backgroundColor';
// camelize("list-style-image") === 'listStyleImage';
// camelize("-webkit-transition") === 'WebkitTransition';
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));