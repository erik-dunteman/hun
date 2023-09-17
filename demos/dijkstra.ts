class Graph {
  private vertices: number;
  private adjacencyList: Map<number, Map<number, number>>;

  constructor(vertices: number) {
    this.vertices = vertices;
    this.adjacencyList = new Map<number, Map<number, number>>();
  }

  addEdge(source: number, destination: number, weight: number) {
    if (!this.adjacencyList.has(source)) {
      this.adjacencyList.set(source, new Map<number, number>());
    }
    if (!this.adjacencyList.has(destination)) {
      this.adjacencyList.set(destination, new Map<number, number>());
    }

    this.adjacencyList.get(source)!.set(destination, weight);
    this.adjacencyList.get(destination)!.set(source, weight);
  }

  dijkstra(startVertex: number) {
    const distance: Map<number, number> = new Map<number, number>();
    const visited: Map<number, boolean> = new Map<number, boolean>();

    for (let i = 0; i < this.vertices; i++) {
      distance.set(i, Infinity);
      visited.set(i, false);
    }

    distance.set(startVertex, 0);

    for (let i = 0; i < this.vertices - 1; i++) {
      const u = this.minDistance(distance, visited);
      visited.set(u, true);

      const neighbors = this.adjacencyList.get(u)!;
      for (const [v, weight] of neighbors.entries()) {
        if (!visited.get(v) && distance.get(u)! + weight < distance.get(v)!) {
          distance.set(v, distance.get(u)! + weight);
        }
      }
    }

    this.printSolution(distance);
  }

  minDistance(distance: Map<number, number>, visited: Map<number, boolean>): number {
    let min = Infinity;
    let minIndex = -1;

    for (let v = 0; v < this.vertices; v++) {
      if (!visited.get(v) && distance.get(v)! <= min) {
        min = distance.get(v)!;
        minIndex = v;
      }
    }

    return minIndex;
  }

  printSolution(distance: Map<number, number>) {
    console.log("Vertex \t Distance from Source");
    for (let i = 0; i < this.vertices; i++) {
      console.log(i + " \t " + distance.get(i));
    }
  }
}

// Example usage:
const graph = new Graph(9);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 7, 8);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2);
graph.addEdge(2, 5, 4);
graph.addEdge(3, 4, 9);
graph.addEdge(3, 5, 14);
graph.addEdge(4, 5, 10);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);
graph.addEdge(6, 8, 6);
graph.addEdge(7, 8, 7);

graph.dijkstra(0);
