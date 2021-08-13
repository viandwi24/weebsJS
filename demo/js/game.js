// options
const gameOptions = {
}

// create game isntance
const game = new Game2D(gameOptions)

// mount to screen
game.mount(document.querySelector('#screen'))

// scene
game.addScene([ MainScene ])

// register system
game.registerSystem([ Fps, ShapeDraw ])

//  start
game.start(MainScene)