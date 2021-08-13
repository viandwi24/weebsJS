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
    this.transform.scale.x = Math.floor(Math.random() * (100 - 25 + 1) + 25)
    this.transform.scale.y = Math.floor(Math.random() * (100 - 25 + 1) + 25)
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