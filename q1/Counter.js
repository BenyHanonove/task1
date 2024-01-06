class Counter {
    constructor() {
        this.value = 0;
    }

    Initialize(_value){
        this.value  = _value
    }

    increment() {
        this.value++;
    }

    setCurrentValue(_value) {
        this.value = _value;
    }

    getCurrentValue() {
        return this.value;
    }

    go(){
        const arr = [];
        for (let i = 0; i <= this.value; i++) {
            arr.push(i);
        }
        return arr;
    }
}

window.Counter = Counter;