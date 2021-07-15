
export class Value {
    static from(val) {
        return new Value(val);
    }
    constructor(val) {
        this.val = val;
    } 
}