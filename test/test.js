const assert = require('assert')
const Graph = require('../src/Graph')

let g = new Graph()

describe('Graphs implementation', () => {

  before(() => {
    // 1 semester
    g.addVertex('EEL5105')
    g.addVertex('INE5401')
    g.addVertex('INE5402')
    g.addVertex('INE5403')
    g.addVertex('MTM5161')
    
    // 2 semester
    g.addVertex('INE5404')
    g.addVertex('INE5405')
    g.addVertex('INE5406')
    g.addVertex('INE5407')
    g.addVertex('MTM5512')
    g.addVertex('MTM7174')

    g.conn('INE5402', 'INE5404')
    g.conn('MTM5161', 'INE5405')
    g.conn('EEL5105', 'INE5406')
    g.conn('MTM5161', 'MTM7174')
    
    // 3 semester
    g.addVertex('INE5408')
    g.addVertex('INE5409')
    g.addVertex('INE5410')
    g.addVertex('INE5411')
    g.addVertex('MTM5245')

    g.conn('INE5404', 'INE5408')
    g.conn('MTM5512', 'INE5409')
    g.conn('MTM7174', 'INE5409')
    g.conn('INE5404', 'INE5410')
    g.conn('INE5406', 'INE5411')
    g.conn('MTM5512', 'MTM5245')
    
    // 4 semester
    g.addVertex('INE5412')
    g.addVertex('INE5413')
    g.addVertex('INE5414')
    g.addVertex('INE5415')
    g.addVertex('INE5416')
    g.addVertex('INE5417')

    g.conn('INE5410', 'INE5412')
    g.conn('INE5411', 'INE5412')
    g.conn('INE5403', 'INE5413')
    g.conn('INE5408', 'INE5413')
    g.conn('INE5404', 'INE5414')
    g.conn('INE5403', 'INE5415')
    g.conn('INE5408', 'INE5415')
    g.conn('INE5408', 'INE5416')
    g.conn('INE5408', 'INE5417')
    
    // 5 semester
    g.addVertex('INE5418')
    g.addVertex('INE5419')
    g.addVertex('INE5420')
    g.addVertex('INE5421')
    g.addVertex('INE5422')
    g.addVertex('INE5423')

    g.conn('INE5412', 'INE5418')
    g.conn('INE5414', 'INE5418')
    g.conn('INE5417', 'INE5419')
    g.conn('INE5408', 'INE5420')
    g.conn('MTM5245', 'INE5420')
    g.conn('MTM5512', 'INE5420')
    g.conn('MTM7174', 'INE5420')
    g.conn('INE5408', 'INE5421')
    g.conn('INE5415', 'INE5421')
    g.conn('INE5414', 'INE5422')
    g.conn('INE5408', 'INE5423')
    
    // 6 semester
    g.addVertex('INE5424')
    g.addVertex('INE5425')
    g.addVertex('INE5426')
    g.addVertex('INE5427')
    g.addVertex('INE5428')

    g.conn('INE5412', 'INE5424')
    g.conn('INE5405', 'INE5425')
    g.conn('INE5421', 'INE5426')
    g.conn('INE5419', 'INE5427')
    g.conn('INE5407', 'INE5428')
    
    // 7 semester
    g.addVertex('INE5429')
    g.addVertex('INE5430')
    g.addVertex('INE5431')
    g.addVertex('INE5432')
    g.addVertex('INE5433')

    g.conn('INE5403', 'INE5429')
    g.conn('INE5414', 'INE5429')
    g.conn('INE5415', 'INE5429')
    g.conn('INE5405', 'INE5430')
    g.conn('INE5413', 'INE5430')
    g.conn('INE5416', 'INE5430')
    g.conn('INE5414', 'INE5431')
    g.conn('INE5423', 'INE5432')
    g.conn('INE5423', 'INE5433')
    
    // 8 semester
    g.addVertex('INE5434')

    g.conn('INE5433', 'INE5434')

  })

  it('Added nodes', () => {
    assert.equal(g.getAllVertices()[0], 'EEL5105')
    assert.equal(g.getAllVertices()[10], 'MTM7174')
    assert.equal(g.getAllVertices()[20], 'INE5416')
  })
  it('Has connected and found adjacents', () => {
    assert.equal(g.getAdjacents('EEL5105').length, 1)
    assert.equal(g.getAdjacents('INE5403').length, 3)
  })

  it('has order of  39', () => {
    assert.equal(g.getGraphOrder(), 39)
  })

  it('Gets a random vertex', () => {
    assert.notEqual(g.getAllVertices().indexOf(g.getVertex()), -1)
  })

  it('Is not a regular graph', () => {
    assert.equal(g.isRegular(), false)
  })

  it('Is not a complete graph', () => {
    assert.equal(g.isComplete(), false)
  })

  it('Returns the correct transitive closure', () => {
    assert.equal(g.getTransitiveClosure('INE5403').length, 7)
  })

  it('Is not a connected graph', () => {
    assert.equal(g.isConnected(), false)
  })

  it('Deletes nodes', () => {
    g.rmVertex('EEL5105')
    assert.equal(g.getAllVertices().indexOf('EEL5105'), -1)
  })


  it('Disconnects nodes', () => {
    g.disc('INE5406','INE54011')
    assert.equal(g.getAdjacents('INE5406').indexOf('INE54011'), -1)
  })

})