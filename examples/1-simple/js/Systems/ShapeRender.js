class ShapeRender extends Weebs.System {
  execute (context) {
    this.drawShapeRectangle(context)
    this.drawShapeCircle(context)
  }

  drawShapeRectangle ({ canvas, scene: { entityManager } }) {
    const ctx = canvas.getContext('2d')
    const allEntityHasShape = entityManager.getEntityHasComponent(['Rectangle', 'Transform'])
    for (let i = 0; i < allEntityHasShape.length; i++) {
      const entity = allEntityHasShape[i];
      const rectangle = entity.getComponent('Rectangle')
      const scale = entity.getComponent('Transform').scale
      const position = entity.getComponent('Transform').position

      // 
      ctx.beginPath()
      ctx.fillStyle = rectangle.fillColor
      ctx.strokeStyle = rectangle.strokeColor
      ctx.rect(position.x, position.y, scale.x, scale.y)
      ctx.fill()
      ctx.stroke()
    }
  }

  drawShapeCircle ({ canvas, scene: { entityManager } }) {
    const ctx = canvas.getContext('2d')
    const allEntityHasShape = entityManager.getEntityHasComponent(['Circle', 'Transform'])
    for (let i = 0; i < allEntityHasShape.length; i++) {
      const entity = allEntityHasShape[i];
      const circle = entity.getComponent('Circle')
      const scale = entity.getComponent('Transform').scale
      const position = entity.getComponent('Transform').position

      // 
      ctx.beginPath()
      ctx.fillStyle = circle.fillColor
      ctx.strokeStyle = circle.strokeColor
      ctx.ellipse(position.x, position.y, scale.x, scale.y, 0, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    }
  }
}