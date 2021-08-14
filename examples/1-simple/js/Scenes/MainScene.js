class MainScene extends Weebs.Scene {
  constructor () {
    console.log('Scene init')
    super(...arguments)
  }

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
    // add player to scene
    for (let i = 0; i < 100; i++) {
      this.addPlayer('Box_' + i)
    }
  }

  /**
   * On Scene Start
   */
  start () {
    // 
  }

  /**
   * On Scene Update
   */
  update () {
  }
  
  /**
   * Add Player
   */
  addPlayer (name = 'Box') {
    // add player on scene
    const player = new Box

    // entity use rectangle shape
    player.addComponent(new Weebs.Engine2D.Component.Rectangle)
    // player.addComponent(new Circle)

    // entity use transform, so entity can move, scale, and rotate
    player.addComponent(new Weebs.Engine2D.Component.Transform)

    // entity have heatlh component
    player.addComponent(new Health)

    // add
    this.addEntity(player, name)
  }
}