

function HtmlElement() {
    this.click = function () {
        console.log('click');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focus');
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

function HtmlSelectElement() {
    this.items = [];

    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            this.items.push(arguments[i]);
        }
    }

    this.addItem = function (item) {
        this.items.push(item)
        console.log('Item was added');
    }
    this.removeItem = function (itemToRemove) {
        if (this.items.includes(itemToRemove)) {
            this.items = this.items.filter(item => item !== itemToRemove);
            console.log('Item was removed');
        } else {
            console.log(`${itemToRemove} is not in the array.`);
        }
    }
}

const e = new HtmlElement()
const s = new HtmlSelectElement()