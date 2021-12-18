import { IGameEngineContext } from "../Engine"
import { Resource } from "../Resource/Resource"
import { Entity } from "./Entity"

import { Transform } from "../Component/Transform"
import { SpriteSheetAnimationManager } from ".."

export enum ESpriteSheetDirection {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL',
    BOTH = 'BOTH'
}

export interface ISpriteSheetOptions {
    frameWidth: number;
    frameHeight: number;
    renderWidth: number;
    renderHeight: number;
    frameCount?: number;
    direction?: ESpriteSheetDirection;
}

export const SpriteSheetDefaultOptions: ISpriteSheetOptions = {
    frameWidth: 0,
    frameHeight: 0,
    renderWidth: 0,
    renderHeight: 0,
    direction: ESpriteSheetDirection.HORIZONTAL,
    frameCount: 0
}

export interface ISpriteSheetState {
    currentFrame: number;
}

export interface ISpriteSheetFrame {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class SpriteSheet extends Entity {
    options: ISpriteSheetOptions
    state: ISpriteSheetState
    frameCount: number = 0
    AnimationManager: SpriteSheetAnimationManager

    constructor(public name: string, public resource: Resource, instanceOptions: ISpriteSheetOptions) {
        super(name, resource)
        this.options = Object.assign({}, SpriteSheetDefaultOptions, instanceOptions)
        this.state = {
            currentFrame: 0
        }

        // create animation manager
        this.AnimationManager = new SpriteSheetAnimationManager()

        // calculate the number of frames
        const dom = this.resource.getDom<HTMLImageElement>()
        const { frameWidth, frameHeight, direction } = this.options
        if (direction === ESpriteSheetDirection.HORIZONTAL) {
            this.frameCount = Math.floor(dom.width / frameWidth)
        } else if (direction === ESpriteSheetDirection.VERTICAL) {
            this.frameCount = Math.floor(dom.height / frameHeight)
        } else if (direction === ESpriteSheetDirection.BOTH) {
            if (!instanceOptions.frameCount) {
                throw new Error("SpriteSheet: frameCount is required when direction is BOTH")
            } else {
                this.frameCount = instanceOptions.frameCount
            }
        }
    }
    
    getFrame(frame: number) {
        const dom = this.resource.getDom<HTMLImageElement>()
        const { frameWidth, frameHeight, direction } = this.options

        if (direction === ESpriteSheetDirection.HORIZONTAL) {
            return {
                x: frame * frameWidth,
                y: 0,
                width: frameWidth,
                height: frameHeight
            }
        } else if (direction === ESpriteSheetDirection.VERTICAL) {
            return {
                x: 0,
                y: frame * frameHeight,
                width: frameWidth,
                height: frameHeight
            }
        } else if (direction === ESpriteSheetDirection.BOTH) {
            return {
                x: frame % this.frameCount * frameWidth,
                y: Math.floor(frame / this.frameCount) * frameHeight,
                width: frameWidth,
                height: frameHeight
            }
        }

        return { x: 0, y: 0, width: 0, height: 0 }
    }

    update(ctx: IGameEngineContext) {
        if (this.AnimationManager.currentAnimation) {
            this.AnimationManager.update(this, ctx)
        }
    }

    draw({ GameCanvas }: IGameEngineContext) {
        const dom = this.resource.getDom<HTMLImageElement>()
        const { ctx } = GameCanvas
        const { frameWidth, frameHeight, direction, renderWidth, renderHeight } = this.options
        const { currentFrame } = this.state
        const { position } = this.getComponent<Transform>('Transform')

        const frame = this.getFrame(currentFrame)
        if (ctx) {
            ctx.drawImage(dom, frame.x, frame.y, frame.width, frame.height, position.x, position.y, renderWidth, renderHeight)
        }
    }
}