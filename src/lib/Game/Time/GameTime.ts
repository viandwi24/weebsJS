export class GameTime {
    requestAnimationeFrame: number|undefined
    time: number
    deltaTime: number
    lastTime: number
    isRunning: boolean
    frame: number
    onFrameUpdates: Array<(time: number, deltaTime: number) => void>
    
    constructor() {
        this.time = 0
        this.deltaTime = 0
        this.lastTime = 0
        this.isRunning = false
        this.frame = 0
        this.onFrameUpdates = []
    }
    
    start() {
        this.isRunning = true
        this.requestAnimationeFrame = requestAnimationFrame(this.onFrame.bind(this))
    }

    stop() {
        if (this.requestAnimationeFrame) {
            cancelAnimationFrame(this.requestAnimationeFrame)
            this.requestAnimationeFrame = undefined
            this.isRunning = false
        }
    }

    onFrameUpdate() {
        this.onFrameUpdates.forEach(update => update(this.time, this.deltaTime))
    }

    onFrame(time: number) {
        if (this.isRunning) {
            this.deltaTime = time - this.lastTime
            this.lastTime = time
            this.time += this.deltaTime
            this.frame++
            this.onFrameUpdate()
            this.requestAnimationeFrame = requestAnimationFrame(this.onFrame.bind(this))
        }
    }

    getFps() {
        // get fps - frame per second
        return (1 / (this.deltaTime / 1000))
    }
}