// A node must have a value and a referene to the next node
export default class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}