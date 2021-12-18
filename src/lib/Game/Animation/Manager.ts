import { IGameEngineContext, SpriteSheet } from ".."
import { IAnimationOptions } from "./Animation"
import { ISpriteSheetAnimationOptions } from "./SpriteSheet"

export interface IEntityAnimationManagerAnimations {
    name: string;
    animationOptions: IAnimationOptions;
}

export class EntityAnimationManager {
    animations: Array<IEntityAnimationManagerAnimations> = []

    addAnimation(name: string, animationOptions: IAnimationOptions) {
        this.animations.push({
            name,
            animationOptions
        })
    }
}

export interface ISpriteSheetAnimationManager {
    name: string;
    animationOptions: ISpriteSheetAnimationOptions;
}


export class SpriteSheetAnimation {
    activeFrameIndex: number

    constructor (public name: string, public animationOptions: ISpriteSheetAnimationOptions) {
        this.activeFrameIndex = 0
    }
}

export class SpriteSheetAnimationManager {
    animations: Array<ISpriteSheetAnimationManager> = []
    currentAnimation: SpriteSheetAnimation | undefined

    addAnimation(name: string, animationOptions: ISpriteSheetAnimationOptions) {
        this.animations.push({
            name,
            animationOptions
        })
    }

    playAnimation(name: string) {
        const a = this.animations.find(a => a.name === name)
        if (a) {
            this.currentAnimation = new SpriteSheetAnimation(name, a.animationOptions)
        }
    }

    update(entity: SpriteSheet, GameContext: IGameEngineContext) {
        const { GameTime } = GameContext
        const { time, deltaTime } = GameTime

        if (this.currentAnimation) {
            const { animationOptions } = this.currentAnimation
            const { state } = entity


            const timeforFramePerOneSecond = 1000 / animationOptions.frameRate
            
            // increase activeFrameIndex by 1 every timeForFramePerOneSecond
            this.currentAnimation.activeFrameIndex = Math.floor(time / timeforFramePerOneSecond) % animationOptions.frames.length

            // update the entity's current frame
            const frame = animationOptions.frames[this.currentAnimation.activeFrameIndex]
            state.currentFrame = frame

            // if the animation is not looping and the active frame index is the last frame, stop the animation
            if (!animationOptions.loop && this.currentAnimation.activeFrameIndex === animationOptions.frames.length - 1) {
                this.currentAnimation = undefined
            }
        }
    }
}