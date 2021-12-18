import { Component } from 'react'
import './GameScreen.scss'

import {
    GameEngine,
    ResourceType
} from '../lib/Game'

import { LoadingScene } from '../Game/Scenes/LoadingScene'
import { TestScene } from '../Game/Scenes/TestScene'

interface IGameScreenProps {}

interface IGameScreenState {
    game: GameEngine|undefined
}

export default class GameScreen extends Component<IGameScreenProps, IGameScreenState> {
    constructor(props: IGameScreenProps) {
        super(props)

        this.state = {
            game: undefined
        }
    }

    componentDidMount() {
        const canvas = document.getElementById('screen-canvas') as HTMLCanvasElement
        const game = new GameEngine(canvas)
        this.setState({ game })

        // add update handler
        this.handleGameScene(game)
    }
    
    componentWillUnmount() {
        const { game } = this.state
        if (game) {
            game.destroy()
        }
    }

    render() {
        return (
            <div className='screen'>
                <canvas id='screen-canvas' className='screen-canvas'></canvas>
            </div>
        )
    }

    async handleGameScene(game: GameEngine) {
        // add update handler
        game.middlewares.push(({ GameCanvas, GameTime}, next) => {
            next()

            const ctx = GameCanvas.ctx
            if (ctx) {
                const fps = Math.floor(GameTime.getFps())
                const time = Math.floor(GameTime.time / 1000)
                const deltaTime = GameTime.deltaTime / 1000
                ctx.fillStyle = '#fff'
                ctx.font = '16px Arial'
                ctx.fillText(`FPS: ${fps} | Time : ${time} | Delta : ${deltaTime}`, 10, 20)
            }
        })

        // resources
        const maps = '/maps/forest'
        const ResourceManager = game.ResourceManager
        ResourceManager.addHTTPResource(
            'char_adventurer_girl',
            `${maps}/resources/images/char_adventurer_girl.png`,
            ResourceType.IMAGE,
            {}
        )
        ResourceManager.addHTTPResource(
            'char_femalestaffdark_yellow',
            `${maps}/resources/images/char_femalestaffdark_yellow.png`,
            ResourceType.IMAGE,
            {}
        )
        ResourceManager.addHTTPResource(
            'char_cute_male',
            `${maps}/resources/images/char_cute_male.png`,
            ResourceType.IMAGE,
            {}
        )
        ResourceManager.addHTTPResource(
            'mob_slime',
            `${maps}/resources/images/mob_slime.png`,
            ResourceType.IMAGE,
            {}
        )
        ResourceManager.addHTTPResource(
            'water',
            `${maps}/resources/images/water.png`,
            ResourceType.IMAGE,
            {}
        )

        // start animation
        game.start()

        // loading resources
        game.runScene('Loading Scene', LoadingScene)
        // await new Promise((resolve) => setTimeout(resolve, 2000))
        await ResourceManager.load()
        game.stopScene()

        // go to game scene
        game.runScene('Test Scene', TestScene)
    }
}