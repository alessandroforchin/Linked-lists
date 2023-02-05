import Node from "./newNode";

// At the starting point of every linked list must be a 'head' node
export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    prepend(value) {
        let tmp = null;
        if (tmp.listHead != null) tmp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    append(value) {
        if (this.listHead == null) this.prepend(value);
        else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(value);
        }
    }

    size() {
        let count = 0;
        let tmp = this.listHead;
        while (tmp != null) {
            count++;
            tmp = tmp.nextNode;
        }
        return count;
    }

    head() {
        let tmp = this.listHead;
        if (tmp != null) return tmp;
    }

    tail() {
        let tmp = this.listHead;
        while (tmp.nextNode != null) tmp = tmp.nextNode;
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
            if (tmp == null) return 'There is no item for this index.'
        }
        return tmp;
    }

    pop() {
        let cur = this.listHead;
        let prev = null;
        while (cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while (tmp != null) {
            if (tmp.value === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        while (tmp != null) {
            if (tmp.value === value) return index;
            tmp = tmp.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let tmp = this.listHead;
        let string = '';
        while (tmp != null) {
            string += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }
        return (string += 'null');
    }

    insertAt(value, index) {
        if (this.listHead == null) this.prepend(value);
        else {
            let cur = this.listHead;
            let prev = null;
        
            for (let i = 0; i < index; i++) {
                prev = cur;
                cur = cur.nextNode;
                if (cur == null) break;
            }

            let tmp = new Node(value);
            prev.nextNode = tmp;
            tmp.nextNode = cur;
        }
    }

    removeAt(index) {
        if (this.listHead == null) return 'List already empty.';

        let cur = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.nextNode;
            if (cur == null) return 'No item for this index.';
        }
        prev.nextNode = cur.nextNode;
    }
}