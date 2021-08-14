class Health extends Weebs.Component {
  health = 100
  
  /**
   * On component creating
   */
  create (context, entity) {
    // log
    // console.log('component create')
  }
  
  /**
   * On component start
   */
  start () {
    // log
    // console.log('component start')
  }
  
  /**
   * On component update
   */
  update ({ scene }, entity) {
    const rectangle = entity.getComponent('Rectangle')
    if (scene && rectangle) {
      let color
      if (this.health > 75) {
        color = 'green'
      } else if (this.health > 50) {
        color = 'yellow'
      } else if (this.health > 25) {
        color = 'orange'
      } else if (this.health > 0) {
        color = 'red'
      } else {
        scene.entityManager.destroy(entity)
        if (scene.entityManager.entities.length <= 250) {
          for (let i = 0; i < 2; i++) {
            this.addPlayer(scene, 'Box_' + Math.random() * 1000 + 1)
          }
        }
      }

      rectangle.fillColor = color
    }
  }
  
  /**
   * Add Player
   */
  addPlayer (scene, name = 'Box') {
    const player = new Box
    player.addComponent(new Weebs.Engine2D.Component.Rectangle)
    player.addComponent(new Weebs.Engine2D.Component.Transform)
    player.addComponent(new Health)
    scene.entityManager.add(player, name)
  }
}