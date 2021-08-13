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
    // add player on scene
    const entityManager = this.entityManager
    const player = new Player
    entityManager.add(player)
    player.addComponent(new Transform)
    player.addComponent(new Rectangle)
    player.getComponent('Transform').setState('position', new Vector2(10, 20))
    player.getComponent('Rectangle').setState({
      color: 'yellow',
      width: 100,
      height: 100,
    })


    // add enemy on scene
    const enemy = new Enemy
    entityManager.add(enemy)
    enemy.addComponent(new Transform)
    enemy.addComponent(new Rectangle)
    enemy.getComponent('Transform').setState('position', new Vector2(10, 20))
    enemy.getComponent('Rectangle').setState({
      color: 'red',
      width: 100,
      height: 100,
    })

    // log
    console.log('scene create')
  }


  /**
   * On Scene start.
   */
  start () {

    // log
    console.log('scene start')
  }
  
  /**
   * On Scene update.
   */
  update () {
    // console.log('scene update')
  }
}