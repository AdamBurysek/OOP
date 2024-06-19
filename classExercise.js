const _array = new WeakMap();


class Stack {
    constructor() {
        _array.set(this, [])

    }

    peek() {
        const array = _array.get(this);
        if (array.length === 0) throw new Error('Stack is empty');
        return array[array.length - 1]
    }
    pop() {
        const array = _array.get(this);
        if (array.length === 0) throw new Error('Stack is empty');
        return array.pop()
    }
    push(obj) {
        _array.get(this).push(obj);
    }

    get count() {
        return _array.get(this).length;
    }

}
const s = new Stack();