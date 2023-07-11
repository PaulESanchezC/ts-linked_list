export type TreeComparer<T> = (obj: T) => number;

export class BinaryTree<T> {
  private _root: Node<T> | null;
  private _comparer: TreeComparer<T>;
  private readonly left = "left";
  private readonly right = "right";

  constructor(fn: TreeComparer<T>) {
    this._root = null;
    this._comparer = fn;
  }

  public getRoot(): Node<T> | undefined {
    if (this._root) return this._root;
    return undefined;
  }

  public add(data: T): void {
    if (this._root === null) {
      this._root = new Node<T>(data);
      return;
    }
    this.addNode(this._root, data);
  }

  private addNode(parent: Node<T>, data: T): void {
    const parentData = parent.getData();
    if (!parentData) return;

    while (true) {
      const parentValue = this._comparer(<T>parentData);
      const dataValue = this._comparer(<T>data);

      if (dataValue >= parentValue) {
        const rightChild = parent.getChild(this.right);
        if (rightChild) {
          this.addNode(rightChild, data);
          return;
        } else {
          parent.addChild(this.right, data);
          return;
        }
      } else {
        const leftChild = parent.getChild(this.left);
        if (leftChild) {
          this.addNode(leftChild, data);
          return;
        } else {
          parent.addChild(this.left, data);
          return;
        }
      }
    }
  }

  public depth(current: Node<T> | null): number {
    if (!current) return 0;

    let leftDepth = 0;
    const leftChild = current.getChild(this.left);
    if (leftChild) {
      leftDepth = this.depth(leftChild);
      if (leftDepth === -1) return -1;
    }

    let rightDepth = 0;
    const rightChild = current.getChild(this.right);
    if (rightChild) {
      rightDepth = this.depth(rightChild);
      if (rightDepth === -1) return -1;
    }

    console.log(`${leftDepth} , ${rightChild}`);
    const depth = Math.max(leftDepth, rightDepth) + 1;
    return depth;
  }

  public getByComparer(value: number): T | undefined {
    if (!this._root) return undefined;
    const current = this._root.getData();
    if (!current) return undefined;

    const currentValue = this._comparer(current);
    if (currentValue === value) return current;

    if (value > currentValue) {
      const rightChild = this._root.getChild(this.right);
      if (!rightChild) return undefined;
      return this.findNode(rightChild, value);
    }
    if (value < currentValue) {
      const leftChild = this._root.getChild(this.left);
      if (!leftChild) return undefined;
      return this.findNode(leftChild, value);
    }
    return undefined;
  }

  private findNode(current: Node<T>, value: number): T | undefined {
    const data = current.getData();
    if (!data) return undefined;

    const currentValue = this._comparer(data);
    if (currentValue === value) return data;

    if (value > currentValue) {
      const rightChild = current.getChild(this.right);
      if (!rightChild) return undefined;
      return this.findNode(rightChild, value);
    }
    if (value < currentValue) {
      const leftChild = current.getChild(this.left);
      if (!leftChild) return undefined;
      return this.findNode(leftChild, value);
    }
  }
}

class Node<T> {
  private _data: T | null;
  private _leftChild: Node<T> | null;
  private _rightChild: Node<T> | null;

  constructor(data: T) {
    this._data = data;
    this._leftChild = null;
    this._rightChild = null;
  }

  public getData(): T | undefined {
    if (this._data === null) return undefined;
    return this._data;
  }

  public getChild(childType: "left" | "right"): Node<T> | undefined {
    if (childType === "left")
      if (this._leftChild) return this._leftChild;
      else return undefined;
    if (childType === "right")
      if (this._rightChild) return this._rightChild;
      else return undefined;
  }

  public addChild(childType: "left" | "right", data: T): boolean {
    const node = new Node<T>(data);
    if (childType === "left") {
      this._leftChild = node;
      return true;
    }
    if (childType === "right") {
      this._rightChild = new Node<T>(data);
      return true;
    }
    return false;
  }
}
