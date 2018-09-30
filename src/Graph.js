module.exports = class Graph {
  constructor () {
    this.graph = new Map()
  }

  addVertex (v) {
    this.graph.set(v, [])
  }

  rmVertex (v) {
    const vList = this.graph.get(v);
		if (vList === undefined) return
    
    for (const entry of vList) {
      this.disc(v, entry);
    }
		this.graph.delete(v);
  }

  conn (v1, v2) {
    const v1List = this.graph.get(v1);
		const v2List = this.graph.get(v2);
    
    if (v1List === undefined || v2List === undefined) return
    
    v1List.push(v2);
    v2List.push(v1);
  }

  disc (v1, v2) {
    const v1List = this.adjacencyList.get(v1);
		const v2List = this.adjacencyList.get(v2);
    
    if (v1List === undefined || v2List === undefined) return
    
    const v1index = v1List.indexOf(v2);
    const v2index = v2List.indexOf(v1);
    
    v1index > -1 && v1List.splice(v1index, 1);
    v2index > -1 && v2List.splice(v2index, 1);
  }

  getGraphOrder () {
    return this.graph.size
  }

  getVertex () {
		return this.getAllVerteces().length > 0 && this.getAllVerteces()[Math.floor(Math.random() * this.graph.size)]
  }
  
  getAllVerteces () {
    return [...this.graph.keys()]
  }

  getAdjacents (v) {
    return this.graph.get(v) || undefined
  }

  getGraphDegree (v) {
    return this.getAdjacents(v).length;
  }

  isRegular () {
    const degree = this.getGraphDegree(this.getVertex());
		for(const v of this.getAllVerteces()) {
			if(this.getDegree(v) !== degree) {
				return false;
			}
		}
		return true;
  }

  isComplete () {
    const n = this.order() - 1;
		for (const vertex of this.getVertices()) {
			if (this.getDegree(vertex) !== n) {
				return false;
			}
		}
		return true;
  }

  getTransitiveClosure (v) {
    if(v === undefined) return
    
    let visited = []
		visited.push(v);
    
    for (const v of this.getAdjacentVertices(v)) {
			if (!visited.includes(v)) {
				this.findTransitiveClosure(v, visited);
			}
		}
    
    return visited;
  }

  isConnected () {
		return this.compareSets(this.getAllVerteces(), this.transitiveClosure(this.getVertex()));
  }

  isTree () {
		return this.isConnected() && !this.hasCycleWith(this.getVertex(), this.getVertex(), []);
	}
}