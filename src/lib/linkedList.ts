export default class LinkedList<T> {
  private _head: Node<T> | null;
  private _nodeCount: number;
  private _last: Node<T> | null;

  constructor() {
    this._head = null;
    this._nodeCount = 0;
    this._last = null;
  }

  enque(node: T): void {
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
    this._last?.setNext(newNode);
    this._last = newNode;
    this._nodeCount++;
  }

  dequeue(): T | undefined {
    if (this._head === null) return undefined;

    if (!this._head.hasNext()) {
      const result = Object.assign({}, this._head);
      this._nodeCount--;
      this.clear();
      return result.node;
    }

    const nextHead = <Node<T>>this._head.next();
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

  clear(): void {
    this._head = null;
    this._nodeCount = 0;
    this._last = null;
  }

  hasNext(): boolean {
    const next = this._head?.next();
    if (next) return true;
    return false;
  }

  count(): number {
    return this._nodeCount;
  }
}

class Node<T> {
  private _next: Node<T> | null;
  private _previous: Node<T> | null;
  private _hasNext: boolean;

  constructor(public node: T) {
    this._next = null;
    this._previous = null;
    this._hasNext = false;
  }

  public hasNext(): boolean {
    return this._hasNext;
  }

  public next(): Node<T> | undefined {
    if (this._next === null) return undefined;

    if (this._next.hasNext()) this._hasNext = true;
    else this._hasNext = false;

    return this._next;
  }

  public setNext(node: Node<T>): boolean {
    this._previous = node;
    this._next = node;
    this._hasNext = true;
    return true;
  }
}
