import { IGame2DContext } from "../../../index";
import { System } from "../../System";

export class SimpleFpsUI extends System {
    lastSecond = 0
    fpsInSecond = 0

    execute(context: IGame2DContext) {
        const { canvas, time } = context
        const ctx = canvas.getContext('2d')
        const lastTime = Math.round(time.last / 1000)
        if (this.lastSecond !== lastTime) {
            this.fpsInSecond = time.fps
        }
        if (ctx) {
            ctx.font = '12px monospace'
            ctx.fillStyle = '#fff'
            ctx.fillText(`fps: ${this.fpsInSecond}`, 10, 20)
        }
        this.lastSecond = lastTime
    }
}