import { GameCanvas } from "./Canvas/GameCanvas"
import { GameTime } from "./Time/GameTime"
import { ResourceManager } from "./Resource/Manager"
import { Scene } from "./Scene/Scene"

export interface IGameEngineContext {
    GameCanvas: GameCanvas;
    GameTime: GameTime;
    ResourceManager: ResourceManager;
}

export class GameEngine {
    GameCanvas: GameCanvas
    GameTime: GameTime
    ResourceManager: ResourceManager
    updates: Array<(context: IGameEngineContext) => void>
    draws: Array<(context: IGameEngineContext) => void>
    sceneActive:  Scene|undefined
    middlewares: Array<(context: IGameEngineContext, next: () => void) => void>

    constructor(private canvas: HTMLCanvasElement) {
        // create canvas and time
        this.GameCanvas = new GameCanvas(canvas)
        this.GameTime = new GameTime()
        this.ResourceManager = new ResourceManager()

        // 
        this.middlewares = []

        // events
        this.updates = []
        this.draws = []

        // 
        this.handleTime()
    }

    addUpdateHandler(handler: (context: IGameEngineContext) => void) {
        this.updates.push(handler)
    }

    addDrawHandler(handler: (context: IGameEngineContext) => void) {
        this.draws.push(handler)
    }

    destroy() {
        this.GameCanvas.destroy()
    }

    start() {
        this.GameTime.start()
    }

    stop() {
        this.GameTime.stop()
    }

    handleTime() {
        this.GameTime.onFrameUpdates.push(this.onFrameUpdate.bind(this))
    }

    initContext(): IGameEngineContext {
        return {
            GameCanvas: this.GameCanvas,
            GameTime: this.GameTime,
            ResourceManager: this.ResourceManager
        }
    }

    onFrameUpdate(time: number, deltaTime: number) {
        // clear canvas ctx
        this.GameCanvas.ctx?.clearRect(0, 0, this.GameCanvas.canvas.width, this.GameCanvas.canvas.height)

        // 
        const ctx = this.initContext()

        // run middleware
        const middleware_to_run = [...this.middlewares]
        const next = () => {
            const middleware = middleware_to_run.shift()
            if (middleware) {
                middleware(ctx, next)
            } else {
                if (this.sceneActive) {
                    // 
                    this.sceneActive.update(ctx)
                    const objects = this.sceneActive.objects

                    // updates
                    objects.forEach(object => object.update(ctx))
                    this.sceneActive.update(ctx)

                    // draw scene objects
                    objects.forEach(object => object.draw(ctx))
                    this.sceneActive.draw(ctx)
                } else {
                    // update
                    this.updates.forEach(update => update(ctx))
                    // draw 
                    this.draws.forEach(draw => draw(ctx))
                }
            }
        }

        // 
        next()
    }

    runScene(name: string, scene: typeof Scene) {
        this.sceneActive = new scene(name, this.initContext())
    }

    stopScene() {
        this.sceneActive = undefined
    }
}

export {
    GameCanvas,
    GameTime,
    ResourceManager,
    Scene
}