const gameOfLifeGenerator = require("../gameOfLife.mjs")

describe('Game of Life', () => {

  it('test for [[0,1,0],[0,1,1],[0,1,0]] ', () => {
    expect(gameOfLifeGenerator(
      [[0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]])).toEqual([ [ 0, 1, 1 ], [ 1, 1, 1 ], [ 0, 1, 1 ] ]
      )
  })

  it('test for [[0,1,0],[0,1,1],[0,1,0]] ', () => {
    expect(gameOfLifeGenerator(
      [[0, 0, 0],
      [1, 0, 0],
      [0, 1, 1]])).toEqual([[0, 0, 0], [1, 1, 0], [0, 1, 1]])
  })

});

