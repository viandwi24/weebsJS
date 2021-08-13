# WeebsJS
A simple lightweight game engine with (Entity - Component - System) ECS Pattern

## Deno
![Preview](https://github.com/viandwi24/weebsJS/blob/main/images/preview.gif?raw=true)
https://viandwi24.github.io/weebsJS

## Overview
### Create Game
```
// create game isntance
const game = new Game2D(gameOptions)

// mount to screen
game.mount(document.querySelector('#screen'))

// scene
game.addScene([ MainScene ])

//  start
game.start(MainScene)
```

### Create Scene
```
class MainScene extends Scene {
  /**
   * Before scene load.
   */
  preload () {
  }
  
  /**
   * On scene creating
   */
  create () {
  }


  /**
   * On Scene start.
   */
  start () {
    // create entity with component
    const player = new Player
    player.addComponent(new Transform)

    // add player entity on scene
    this.entityManager.add(player)
  }
  
  /**
   * On Scene update.
   */
  update () {
  }
}
```

### Create Entity
```
class Player extends Entity {  
  /**
   * On entitiy creating
   */
  create () {
    this.transform = this.getComponent('Transform')
    this.shape = this.getComponent('Rectangle')
  }
  
  /**
   * On entitiy start
   */
  start () {
    // set position
    this.transform.setState('position', new Vector2(10, 20))

    // set rectangle
    this.shape.setState({
      color: 'yellow',
      width: 100,
      height: 100,
    })
  }
  
  /**
   * On entitiy update
   */
  update () {
    this.transform.position.x += 2
  }
}
```

### Create Component
```
class Rectangle extends Component {
  width = 0
  height = 0
  color = 'white'

  /**
   * On component creating
   */
  create () {
  }
  
  /**
   * On component start
   */
  start () {
  }
  
  /**
   * On component update
   */
  update () {
  }
}
class Transform extends Component {
  position = new Vector2(0, 0)
  
  /**
   * On component creating
   */
  create () {
  }
  
  /**
   * On component start
   */
  start () {
  }
  
  /**
   * On component update
   */
  update () {
  }
}
```


### Create System For Rendering
```
class ShapeDraw extends System {
  execute ({ canvas, time }) {
    const context = canvas.getContext('2d')

    // get entities has shape component
    const allEntityHasShape = this.entityManager.getEntityHasComponent(['Rectangle', 'Transform'])
    for (let i = 0; i < allEntityHasShape.length; i++) {
      const entity = allEntityHasShape[i];
      const rectangleState = entity.getComponent('Rectangle').getState()
      const position = entity.getComponent('Transform').getState('position')

      // draw to canvas
      context.beginPath()
      context.fillStyle = rectangleState.color
      context.fillRect(position.x, position.y, rectangleState.width, rectangleState.height)
    }
  }
}
```