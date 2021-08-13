class Fps extends System {
  lastSecond = 0
  fpsInSecond = 0

  execute ({ canvas, time }) {
    const context = canvas.getContext('2d')
    const lastTime = Math.round(time.last / 1000)
    if (this.lastSecond !== lastTime) {
      this.fpsInSecond = time.fps 
    }
    context.font = '12px monospace'
    context.fillStyle = '#fff'
    context.fillText(`fps: ${this.fpsInSecond}`, 10, 20)
    this.lastSecond = lastTime
  }
}