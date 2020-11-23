class LinkedListNode {
    // implement this

}

class LinkedList {
    // implement this
    constructor() {
        this.linkedList = [];
    }
    insert(p) {
        this.linkedList.push(p)
    }
    find(p) {
        // if (this.linkedList.includes(p)) { return (true) } else { return false }
        if (this.linkedList.includes(p) == true) {
            return true;
        } else {
            return false;
        }
    }
    size() {
        return (this.linkedList.length)
    }
    remove(p) {
        let index = this.linkedList.indexOf(p);
        this.linkedList.splice(index, 1);
    }
}