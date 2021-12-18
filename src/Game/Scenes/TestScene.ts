import { IGameEngineContext, ResourceType, Scene, SpriteSheet } from "../../lib/Game"
import { Transform } from "../../lib/Game/Component"

import { PlayerIddleAnimation } from "../Animations/Player/IddleAnimation"


export class TestScene extends Scene {
    constructor(public name: string, ctx: IGameEngineContext) {
        super(name, ctx)

        // player
        const players = [
            { resource: 'char_femalestaffdark_yellow', options: { frameWidth: 32, frameHeight: 32 } },
            { resource: 'char_cute_male', options: { frameWidth: 128, frameHeight: 128 } },
            { resource: 'mob_slime', options: { frameWidth: 32, frameHeight: 32, frameCount: 200 } },
            { resource: 'water', options: { frameWidth: 16, frameHeight: 16, frameCount: 200 } },
        ]

        // loop players with for
        for (let i = 0; i < players.length; i++) {
            const p = players[i];
            const player = this.addSpriteSheet(
                'player_' + i,
                p.resource,
                Object.assign({ renderWidth: 256, renderHeight: 256 }, p.options)
            )
            player.AnimationManager.addAnimation('iddle', {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                frameRate: 5,
                loop: true
            })
            player.AnimationManager.playAnimation('iddle')

            // 
            const transform = player.getComponent<Transform>('Transform')
            const canvasWidth = this.GameContext.GameCanvas.canvas.width
            const canvasHeight = this.GameContext.GameCanvas.canvas.height

            // random position x and y
            transform.position.x = Math.random() * canvasWidth
            transform.position.y = Math.random() * canvasHeight
        }
    }

    update() {
        // const { GameTime } = this.GameContext
        // const player = this.getObject<SpriteSheet>('player')

        // 
        // const { deltaTime } = GameTime

        // apply movement
        // const transform = player.getComponent<Transform>('Transform')
        // const speed = 1
        // transform.position.x += speed
        // transform.position.y += speed
    }

    draw() {
    }
}