document.addEventListener('DOMContentLoaded', main)


// 
let game
function main () {
  // create game instance
  game = new Weebs.Game2D()

  // mount game canvas to DOM
  game.mount(document.querySelector('#screen'))

  // register system
  game.registerSystem([ ShapeRender, Fps ])

  // register scenes
  game.registerScene([ MainScene ])

  // start game
  game.start(MainScene)

  // log
  // console.log(game)
}