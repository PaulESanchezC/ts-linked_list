"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor() {
        this._head = null;
        this._nodeCount = 0;
        this._last = null;
    }
    enque(node) {
        var _a;
        const newNode = new Node(node);
        //new!
        if (this._head === null) {
            this._head = newNode;
            this._last = newNode;
            this._nodeCount++;
            return;
        }
        //head - new!
        if (!this._head.hasNext()) {
            this._head.setNext(newNode);
            this._last = newNode;
            this._nodeCount++;
            return;
        }
        //head - node - new!
        (_a = this._last) === null || _a === void 0 ? void 0 : _a.setNext(newNode);
        this._last = newNode;
        this._nodeCount++;
    }
    dequeue() {
        if (this._head === null)
            return undefined;
        if (!this._head.hasNext()) {
            const result = Object.assign({}, this._head);
            this._nodeCount--;
            this.clear();
            return result.node;
        }
        const nextHead = this._head.next();
        const result = Object.assign({}, this._head);
        if (!nextHead) {
            this.clear();
            this._nodeCount--;
            return result.node;
        }
        this._head = nextHead;
        this._nodeCount--;
        return result.node;
    }
    clear() {
        this._head = null;
        this._nodeCount = 0;
        this._last = null;
    }
    hasNext() {
        var _a;
        const next = (_a = this._head) === null || _a === void 0 ? void 0 : _a.next();
        if (next)
            return true;
        return false;
    }
    count() {
        return this._nodeCount;
    }
}
exports.default = LinkedList;
class Node {
    constructor(node) {
        this.node = node;
        this._next = null;
        this._previous = null;
        this._hasNext = false;
    }
    hasNext() {
        return this._hasNext;
    }
    next() {
        if (this._next === null)
            return undefined;
        if (this._next.hasNext())
            this._hasNext = true;
        else
            this._hasNext = false;
        return this._next;
    }
    setNext(node) {
        this._previous = node;
        this._next = node;
        this._hasNext = true;
        return true;
    }
}
