module.exports = class Graph {
  constructor () {
    this.graph = new Map()
  }

  addVertex (v) {
    this.graph.set(v, [])
  }

  rmVertex (v) {
    const vList = this.graph.get(v)
    
    if (!vList) return
    
    for (const entry of vList) {
      this.disc(v, entry)
    }
		this.graph.delete(v)
  }

  conn (v1, v2) {
    const v1List = this.graph.get(v1)
    if (v1List) v1List.push(v2)
  }

  disc (v1, v2) {
    const v1List = this.graph.get(v1)
    
    if (!v1List) return
    
    const v1index = v1List.indexOf(v2)
    v1index > -1 && v1List.splice(v1index, 1)
  }

  getGraphOrder () {
    return this.graph.size
  }

  getVertex () {
		return this.getAllVertices().length > 0 && this.getAllVertices()[Math.floor(Math.random() * this.graph.size)]
  }
  
  getAllVertices () {
    return [...this.graph.keys()]
  }

  getAdjacents (v) {
    return this.graph.get(v) || undefined
  }

  getDegree (v) {
    return this.getAdjacents(v).length
  }

  isRegular () {
    const degree = this.getDegree(this.getVertex())
		for(const v of this.getAllVertices()) {
			if(this.getDegree(v) !== degree) {
				return false
			}
		}
		return true
  }

  isComplete () {
    const n = this.getGraphOrder() - 1
		for (const vertex of this.getAllVertices()) {
			if (this.getDegree(vertex) !== n) {
				return false
			}
		}
		return true
  }

  getTransitiveClosure (vert, visited) {
    if (!vert) return
    
    if (!visited) visited = []

    visited.push(vert)
    
    for (const v of this.getAdjacents(vert)) {
			if (visited.indexOf(v) === -1) {
				this.getTransitiveClosure(v, visited)
			}
		}

    return visited
  }

  isConnected () {
    const graph = this.getAllVertices()
    const missing = graph.filter(
      item => this.getTransitiveClosure(
        this.getVertex()
      )
      .indexOf(item) < 0
    )
		return missing.length === 0
  }
}