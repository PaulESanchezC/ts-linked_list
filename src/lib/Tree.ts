export class Tree<T> {
  private _parent: Node<T> | null;
  private _leftChild: Node<T> | null;
  private _rightChild: Node<T> | null;
  private _depth: number;

  constructor() {
    this._depth = 0;
    this._parent = null;
    this._leftChild = null;
    this._rightChild = null;
  }
}

class Node<T> {
  private _parent: Node<T> | null;
  private _leftChild: Node<T> | null;
  private _rightChild: Node<T> | null;
  private _level: number;
  private _node: T;

  constructor(data: T, parentNode?: Node<T>) {
    this._node = data;
    if (parentNode) {
      this._parent = parentNode;
      this._level = this._parent.getLevel();
    } else {
      this._level = 0;
      this._parent = null;
    }

    this._leftChild = null;
    this._rightChild = null;
  }

  public getLevel(): number {
    return this._level;
  }
}
