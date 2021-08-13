class Enemy extends Entity {  
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
    this.transform.setState('position', new Vector2(10, 20))
    this.shape.setState({
      color: 'red',
      width: 100,
      height: 100,
    })
  }
  
  /**
   * On entitiy update
   */
  update () {
    this.transform.position.y += 2
  }
}