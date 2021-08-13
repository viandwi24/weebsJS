class Player extends Entity {  
  /**
   * On entitiy creating
   */
  create () {
    this.transform = this.getComponent('Transform')

    // log
    console.log('entity created')
  }
  
  /**
   * On entitiy start
   */
  start () {
    // log
    console.log('entity started')
  }
  
  /**
   * On entitiy update
   */
  update () {
    // log
    // console.log('entity updated')
    this.transform.position.x += 2
  }
}