class Box extends Weebs.Entity {
  transform = undefined
  velocity = {
    x: 1,
    y: 1
  }

  /**
   * On Entity Create
   */
  create (context) {
    this.health = this.getComponent('Health')
    this.transform = this.getComponent('Transform')
    this.transform.position.x = Math.random() * context.game.options.resolution.width - 100 + 50
    this.transform.position.y = Math.random() * context.game.options.resolution.height - 100 + 50
    this.velocity.x = Math.random() < 0.5 ? -1 : 1
    this.velocity.y = Math.random() < 0.5 ? -1 : 1
    let collideWithOtherEntity = this.checkcollideWithOtherEntityX(this.transform, context)
    let tryCount = 0
    while (collideWithOtherEntity && tryCount < 5) {
      this.transform.position.x = Math.random() * context.game.options.resolution.width - 100 + 50
      this.transform.position.y = Math.random() * context.game.options.resolution.height - 100 + 50
      collideWithOtherEntity = this.checkcollideWithOtherEntityX(this.transform, context)
      tryCount++
    }
    // this.transform.scale.x = Math.floor(Math.random() * (100 - 25 + 1) + 25)
    // this.transform.scale.y = Math.floor(Math.random() * (100 - 25 + 1) + 25)
  }

  /**
   * On Entity Start
   */
  start () {
  }

  /**
   * On Entity Update
   */
  update (context) {
    this.mirrorWhenCollide(this.transform.position, this.transform.scale, context)
    this.boxMove()
  }

  mirrorWhenCollide (position, scale, context) {
    const { game, scene } = context
    const gameSize = {
      width: game.options.resolution.width - scale.x,
      height: game.options.resolution.height - scale.y
    }

    let minHealth = 0
    const collideWithWallX = this.checkCollideWithWall('x', position, gameSize)
    const collideWithWallY = this.checkCollideWithWall('y', position, gameSize)
    const collideWithOtherEntity = this.checkcollideWithOtherEntityX(this.transform, context)

    // 
    if (collideWithOtherEntity) {
      const entity = collideWithOtherEntity
      const entityT = entity.getComponent('Transform')
      const entityH = entity.getComponent('Health')
      if (entity.velocity.x !== this.velocity.x) {
        this.velocity.x *= -1
        entity.velocity.x *= -1
      }
      if (entity.velocity.y !== this.velocity.y) {
        this.velocity.y *= -1
        entity.velocity.y *= -1
      }
      entityH.health -= 25
    }
    if (collideWithWallX) {
      this.velocity.x *= -1
      minHealth = 25
    }
    if (collideWithWallY) {
      this.velocity.y *= -1
      minHealth = 25
    }

    // 
    this.health.health -= minHealth
  }

  checkCollideWithWall (axis = 'x', position, gameSize) {
    if (axis === 'x' && (position.x >= gameSize.width || position.x <= 0)) return true
    if (axis === 'y' && (position.y >= gameSize.height || position.y <= 0)) return true
    return false
  }

  checkcollideWithOtherEntityX (transform, { scene }) {
    const entities = scene.entityManager.entities
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i]
      const entityT = entity.getComponent('Transform')
      if (entity.getId() === this.getId()) continue

      if (
        (transform.position.x + transform.scale.x >= entityT.position.x && transform.position.x <= entityT.position.x + entityT.scale.x) &&
        (transform.position.y + transform.scale.y >= entityT.position.y && transform.position.y <= entityT.position.y + entityT.scale.y)
      ) {
        return entity
      }
    }
    return false
  }

  boxMove () {
    this.transform.position.x += this.velocity.x
    this.transform.position.y += this.velocity.y
  }
}