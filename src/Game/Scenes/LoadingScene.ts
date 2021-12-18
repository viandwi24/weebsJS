import {
    Scene,
    IGameEngineContext
} from "../../lib/Game/Engine"

export class LoadingScene extends Scene {
    dot: number

    constructor(public name: string, ctx: IGameEngineContext) {
        super(name, ctx)
        this.dot = 0
    }

    update() {
        this.dot = (this.dot < 3) ? this.dot + 1 : 0
    }
    
    draw(GameContext: IGameEngineContext) {
        const { ctx } = GameContext.GameCanvas
        if (ctx) {
            // center
            ctx.fillStyle = '#fff'
            ctx.font = '16px Arial'
            const txt = 'Loading' + '.'.repeat(this.dot)
            ctx.fillText(txt, GameContext.GameCanvas.canvas.width / 2 - 40, GameContext.GameCanvas.canvas.height / 2)
        }
    }
}