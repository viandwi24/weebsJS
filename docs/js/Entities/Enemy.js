class Enemy extends Entity {  
  /**
   * On entitiy creating
   */
  create () {
    this.transform = this.getComponent('Transform')
  }
  
  /**
   * On entitiy start
   */
  start () {
    // 
  }
  
  /**
   * On entitiy update
   */
  update () {
    this.transform.position.y += 2
  }
}