const assert = require('assert')
const mocha = require('mocha')
const Graph = require('../src/Graph')

let g = new Graph()

describe('Graphs implementation', () => {
  
  mocha.before(() => {
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
    
    // 3 semester
    g.addVertex('INE5408')
    g.addVertex('INE5409')
    g.addVertex('INE5410')
    g.addVertex('INE5411')
    g.addVertex('MTM5245')
    
    // 4 semester
    g.addVertex('INE5412')
    g.addVertex('INE5413')
    g.addVertex('INE5414')
    g.addVertex('INE5415')
    g.addVertex('INE5416')
    g.addVertex('INE5417')
    
    // 5 semester
    g.addVertex('INE5418')
    g.addVertex('INE5419')
    g.addVertex('INE5420')
    g.addVertex('INE5421')
    g.addVertex('INE5422')
    g.addVertex('INE5423')
    
    // 6 semester
    g.addVertex('INE5424')
    g.addVertex('INE5425')
    g.addVertex('INE5426')
    g.addVertex('INE5427')
    g.addVertex('INE5428')
    
    // 7 semester
    g.addVertex('INE5429')
    g.addVertex('INE5430')
    g.addVertex('INE5431')
    g.addVertex('INE5432')
    g.addVertex('INE5433')
    
    // 8 semester
    g.addVertex('INE5434')

  })

  it('Added all nodes', () => {
    assert.equal(g.getAllVerteces().length, 39)
  })

  // it('Remove a node', () => {
  //   g.rmVertex('POO1')
  //   assert.equal(g.getVertex(),[])
  // })

})