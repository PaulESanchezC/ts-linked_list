export class Graph<T, U> {
  private _root: Node<T> | undefined;
}

class Node<T> {
  private _edges: Array<Edge<T>>;
  private _data: T;
}

class Edge<T> {}
