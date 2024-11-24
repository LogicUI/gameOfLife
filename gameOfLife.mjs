// [[0, 0, 0 ],
// [1, 0, 0],
// [0, 1, 1]]


const gameOfLifeGenerator = (board) => {
    const newBoard = board.map(row => [...row]);
    for (let index = 0; index < board.length; index++) {
        for (let innerIndex = 0; innerIndex < board[index].length; innerIndex++) {
            if (index === 0 && innerIndex === 0) {
                const rightNeighbour = board[index][innerIndex + 1]
                const bottomNeighbour = board[index + 1][innerIndex]
                const bottomRightNeighbour = board[index + 1][innerIndex + 1]
                const neighBours = [rightNeighbour, bottomNeighbour, bottomRightNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("topleftAliveNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            } else if (index === 0 && innerIndex === 1) {
                const leftNeighbour = board[index][innerIndex - 1]
                const rightNeighbour = board[index][innerIndex + 1]
                const bottomNeighbour = board[index + 1][innerIndex]
                const bottomLeftNeighbour = board[index + 1][innerIndex - 1]
                const bottomRightNeighbour = board[index + 1][innerIndex + 1]
                const neighBours = [leftNeighbour, rightNeighbour, bottomNeighbour, bottomLeftNeighbour, bottomRightNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("topMiddleAliveNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            } else if (index === 0 && innerIndex === 2) {
                const leftNeighbour = board[index][innerIndex - 1]
                const bottomNeighbour = board[index + 1][innerIndex]
                const bottomLeftNeighbour = board[index + 1][innerIndex - 1]
                const neighBours = [leftNeighbour, bottomNeighbour, bottomLeftNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("topRightAliveNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            } else if (index === 1 && innerIndex === 0) {
                const topNeighbour = board[index - 1][innerIndex]
                const rightNeighbour = board[index][innerIndex + 1]
                const bottomNeighbour = board[index + 1][innerIndex]
                const topRightNeighbour = board[index - 1][innerIndex + 1]
                const bottomRightNeighbour = board[index + 1][innerIndex + 1]
                const neighBours = [topNeighbour, rightNeighbour, bottomNeighbour, topRightNeighbour, bottomRightNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("leftCenterNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            } else if (index === 1 && innerIndex === 1) {
                const topNeighbour = board[index - 1][innerIndex]
                const leftNeighbour = board[index][innerIndex - 1]
                const rightNeighbour = board[index][innerIndex + 1]
                const bottomNeighbour = board[index + 1][innerIndex]
                const topRightNeighbour = board[index - 1][innerIndex + 1]
                const bottomRightNeighbour = board[index + 1][innerIndex + 1]
                const topLeftNeighbour = board[index - 1][innerIndex - 1]
                const bottomLeftNeighbour = board[index + 1][innerIndex - 1]
                const neighBours = [topNeighbour, leftNeighbour, rightNeighbour, bottomNeighbour, topRightNeighbour, bottomRightNeighbour, topLeftNeighbour, bottomLeftNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("centerNeighbours", aliveNeighbours.length)
                console.log(board[index][innerIndex] )
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            } else if (index === 1 && innerIndex === 2) {
                const topNeighbour = board[index - 1][innerIndex]
                const leftNeighbour = board[index][innerIndex - 1]
                const bottomNeighbour = board[index + 1][innerIndex]
                const topLeftNeighbour = board[index - 1][innerIndex - 1]
                const bottomLeftNeighbour = board[index + 1][innerIndex - 1]
                const neighBours = [topNeighbour, leftNeighbour, bottomNeighbour, topLeftNeighbour, bottomLeftNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("centerRightNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            } else if (index === 2 && innerIndex === 0) {
                const topNeighbour = board[index - 1][innerIndex]
                const rightNeighbour = board[index][innerIndex + 1]
                const topRightNeighbour = board[index - 1][innerIndex + 1]
                const neighBours = [topNeighbour, rightNeighbour, topRightNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("bottomLeftNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }

            } else if (index === 2 && innerIndex === 1) {
                const topNeighbour = board[index - 1][innerIndex]
                const leftNeighbour = board[index][innerIndex - 1]
                const rightNeighbour = board[index][innerIndex + 1]
                const topRightNeighbour = board[index - 1][innerIndex + 1]
                const topLeftNeighbour = board[index - 1][innerIndex - 1]
                const neighBours = [topNeighbour, leftNeighbour, rightNeighbour, topRightNeighbour, topLeftNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("bottomCenterNeighbours", aliveNeighbours.length)

                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            }
            else if (index === 2 && innerIndex === 2) {
                const topNeighbour = board[index - 1][innerIndex]
                const leftNeighbour = board[index][innerIndex - 1]
                const topRightNeighbour = board[index - 1][innerIndex + 1]
                const topLeftNeighbour = board[index - 1][innerIndex - 1]
                const neighBours = [topNeighbour, leftNeighbour, topRightNeighbour, topLeftNeighbour]
                const aliveNeighbours = neighBours.filter(neighbour => neighbour === 1)
                console.log("bottomRightNeighbours", aliveNeighbours.length)
                if (board[index][innerIndex] === 1) {
                    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) {
                        newBoard[index][innerIndex] = 0
                    }
                } else if (board[index][innerIndex] === 0) {
                    if (aliveNeighbours.length === 3) {
                        newBoard[index][innerIndex] = 1
                    }
                }
            }
        }
    }
    console.log(newBoard)
    return newBoard;
}


module.exports = gameOfLifeGenerator;