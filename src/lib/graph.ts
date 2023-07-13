type GraphOptions = {};
type RootOptions = {};
export default class Graph<T, U> {
  private _root: Array<[Node<T, U>, RootOptions | undefined]> | null;
  private _nodeCount: number;
  private _options: GraphOptions | undefined;

  constructor(options?: GraphOptions) {
    this._root = null;
    this._nodeCount = 0;
    this._options = options;
  }

  public createNode(data: T, options?: NodeOptions): Node<T, U> {
    let node = new Node<T, U>(data, options);
    return node;
  }

  public addNode(root: Node<T, U>, options?: RootOptions, beginNodePredicate?: (x: T) => boolean, edgeOfNodePredicate?: (x: U) => boolean): void {
    if (this._root !== null) {
      this._root = new Array();
      this._root.push([root, options]);
      return;
    }
    if (!beginNodePredicate || !edgeOfNodePredicate) return;
  }

  private findNodeBy(beginNodePredicate?: (x: T) => boolean): Node<T, U> | undefined {
    if (this._root === null) return;

    return;
  }

  private traverse(current: Node)

  public addEdgeBy(data: U, beginNode: Node<T, U>): void {
    if (this._root === null) {
      return;
    }

    this._root[0][0].addEdge(data, beginNode);
  }

  public nodeCount(): number {
    return this._nodeCount;
  }
}

type NodeOptions = {};
class Node<T, U> {
  private _edges: Array<Edge<U, T>> | null;
  private _data: T | null;

  constructor(data: T, options?: NodeOptions) {
    this._data = data;
    this._edges = null;
    this._data = null;
  }

  public addEdge(data: U, beginNode: Node<T, U>): void {}
}

class Edge<U, T> {
  private _begin: Node<T, U> | null;
  private _ends: Array<Node<T, U>> | null;
  private _data: T | null;

  constructor(data: T, beginVertice: Node<T, U>) {
    this._data = data;
    this._begin = beginVertice;
    this._ends = null;
  }
}
