class Player extends Entity {  
  /**
   * On entitiy creating
   */
  create () {
    this.transform = this.getComponent('Transform')
    this.shape = this.getComponent('Rectangle')

    // log
    console.log('entity created')
  }
    
  /**
   * On entitiy start
   */
  start () {
    this.transform.setState('position', new Vector2(10, 20))
    this.shape.setState({
      color: 'yellow',
      width: 100,
      height: 100,
    })

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