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

  public add(data: T): void {
    if (this._root === null) {
      console.log("adding root node");
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
          console.log("adding right child");
          parent.addChild(this.right, data);
          return;
        }
      } else {
        const leftChild = parent.getChild(this.left);
        if (leftChild) {
          this.addNode(leftChild, data);
          return;
        } else {
          console.log("adding left child");
          parent.addChild(this.left, data);
          return;
        }
      }
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
