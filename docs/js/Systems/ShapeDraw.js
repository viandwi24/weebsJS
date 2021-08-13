class ShapeDraw extends System {
  execute ({ canvas, time }) {
    const context = canvas.getContext('2d')
    const allEntityHasShape = this.entityManager.getEntityHasComponent(['Rectangle', 'Transform'])
    for (let i = 0; i < allEntityHasShape.length; i++) {
      const entity = allEntityHasShape[i];
      const rectangleState = entity.getComponent('Rectangle').getState()
      const position = entity.getComponent('Transform').getState('position')

      // 
      context.beginPath()
      context.fillStyle = rectangleState.color
      context.fillRect(position.x, position.y, rectangleState.width, rectangleState.height)
    }
  }
}