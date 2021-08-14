# WeebsJS
A simple lightweight game engine with ECS (Entity - Component - System) Pattern

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

// register system
game.registerSystem([ Weebs.Engine2D.System.ShapeRender, Weebs.Engine2D.System.SimpleFpsUI ])

// register scenes
game.registerScene([ MainScene ])

//  start
game.start(MainScene)
```

### Scene 
```
class MainScene extends Weebs.Scene {
  /**
   * On Scene Preload
   */
  preload () {
    // 
  }

  /**
   * On Scene Create
   */
  create () {
    const player = new Box

    // entity use rectangle shape
    player.addComponent(new Weebs.Engine2D.Component.Rectangle)
    // player.addComponent(new Circle)

    // entity use transform, so entity can move, scale, and rotate
    player.addComponent(new Weebs.Engine2D.Component.Transform)

    // add
    this.addEntity(player, name)
  }

  /**
   * On Scene Start
   */
  start () {
  }

  /**
   * On Scene Update
   */
   update () {
  }
}
```

### Entity
```
class Box extends Weebs.Entity {
  transform = undefined
  velocity = {
    x: 1,
    y: 1
  }

  /**
   * On Entity Create
   */
  create () {
    this.transform = this.getComponent('Transform')
    this.transform.position.x = Math.random() * 400
    this.transform.position.y = Math.random() * 400
    // this.transform.scale.x = Math.floor(Math.random() * (100 - 25 + 1) + 25)
    // this.transform.scale.y = Math.floor(Math.random() * (100 - 25 + 1) + 25)
    this.velocity.x = Math.random() < 0.5 ? -1 : 1
    this.velocity.y = Math.random() < 0.5 ? -1 : 1

    // 
    // console.log('Entity create')
  }

  /**
   * On Entity Start
   */
  start () {
    // 
    // console.log('Entity start')
  }

  /**
   * On Entity Update
   */
  update ({ game }) {
    // const { x, y } = this.transform.position

    // if (x > 200 || x < 0) this.velocity.x = -(this.velocity.x)
    // if (y > 200 || y < 0) this.velocity.y = -(this.velocity.y) 
    this.mirrorWhenCollide(this.transform.position, this.transform.scale)
    this.boxMove()
  }

  mirrorWhenCollide (position, scale) {
    const gameSize = {
      width: game.options.resolution.width - scale.x,
      height: game.options.resolution.height - scale.y
    }

    if (position.x >= gameSize.width || position.x <= 0) {
      this.velocity.x *= -1
    }
    if (position.y >= gameSize.height || position.y <= 0) {
      this.velocity.y *= -1
    }
  }

  boxMove () {
    this.transform.position.x += this.velocity.x
    this.transform.position.y += this.velocity.y
  }
}
```