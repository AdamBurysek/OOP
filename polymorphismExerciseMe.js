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

function HtmlSelectElement(items = []) {
    this.items = items;


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
    this.render = function () {
        console.log("<select>")
        this.items.map((item) => console.log(`<option>${item}</option>`))
        console.log('</select>');
    }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

function HtmlImageElement(src) {
    this.src = src

    this.render = function () {
        console.log(`<img src="${src}" />`)
    }
}

const e = new HtmlElement()
const s = new HtmlSelectElement()
const i = new HtmlImageElement()

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('https://')
];

for (let element of elements)
    console.log(element.render());