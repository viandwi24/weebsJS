document.addEventListener('DOMContentLoaded', main)


// 
let game
function main () {
  // create game instance
  game = new Weebs.Game2D({ resolution: { width: 1900, height: 950 } })

  // mount game canvas to DOM
  game.mount(document.querySelector('#screen'))

  // this is a basic simple system built-in can you use
  const basicSystems = [
    // for render shape
    Weebs.Engine2D.System.ShapeRender,

    // for show fps
    Weebs.Engine2D.System.SimpleFpsUI,
  ]

  // your systems
  const customSystems = []

  // register system
  game.registerSystem([ ...basicSystems, ...customSystems ])

  // register scenes
  game.registerScene([ MainScene ])

  // start game
  game.start(MainScene)

  // log
  // console.log(Weebs.Engine2D.System.ShapeRender)
}