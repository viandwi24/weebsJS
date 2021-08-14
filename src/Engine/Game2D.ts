import { Scene, SceneManager, System } from '../index'

export interface IGame2DOptions {
    resolution: {
        width: number
        height: number
    }
}

export interface IGame2DScreen {
    dom: HTMLElement|undefined
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D|undefined
}

export interface IGame2DTime {
    last: number
    delta: number
    fps: number
    frame: number
}

export interface IGame2DContext {
    game: Game2D
    screen: IGame2DScreen
    canvas: HTMLCanvasElement
    time: IGame2DTime
    scene: Scene
}

export const Game2DDefaultOptions: IGame2DOptions = {
    resolution: {
        width: 640,
        height: 480
    }
}


/**
 * Create Game 2D
 * @class Game2D
 */
export class Game2D {

    /**
     * Screen
     * @type {IGame2DScreen}
     */
    protected options: IGame2DOptions

    /**
     * Systems
     * @type {Array<System>}
     */
    protected systems: Array<Function|void|any> = []

    /**
     * Systems
     * @type {Array<System>}
     */
    protected systemsRunning: Array<System> = []

    /**
     * Screen
     * @type {IGame2DScreen}
     */
    protected screen: IGame2DScreen

    /**
     * SceneManager
     * @type {IGame2DScreen}
     */
    protected sceneManager: SceneManager

    /**
     * SceneManager
     * @type {IGame2DScreen}
     */
    protected activeScene: Scene

    /**
     * Time
     * @type {IGame2DTime}
     */
    protected time: IGame2DTime = {
      last: 0,
      delta: 0,
      fps: 0,
      frame: 0
    }

    /**
     * Create new 2D Game
     * @param  {IGame2DOptions} options
     */
    constructor (gameOptions: IGame2DOptions|undefined = undefined) {
        // Set options
        this.options = (gameOptions) ? Object.assign(Game2DDefaultOptions, gameOptions) : Game2DDefaultOptions

        // 
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d') || undefined
        this.screen = {
            dom: undefined,
            canvas,
            context,
        }

        // Create scene manager
        this.sceneManager = new SceneManager()

        // Create canvas
        this.createCanvas()

        // 
        this.activeScene = new Scene(this.getContext())
    }
    
    /**
     * Creating virtual canvas
     */
    protected createCanvas () {
        this.screen.canvas.width = this.options.resolution.width
        this.screen.canvas.height = this.options.resolution.height
    }

    /**
     * Mount virtual canvas to screen for display game
     * @param  {HTMLElement} screen
     */
    public mount (screen: HTMLElement) {
        const canvas = document.createElement('canvas')
        this.screen.dom = screen
        if (this.screen.canvas) {
            this.screen.dom.appendChild(this.screen.canvas)
        }
    }
  
    /**
     * Clear screen
     */
    public clearScreen () {
        const { screen: { context } } = this
        if (context) {
            context.clearRect(0, 0, this.options.resolution.width, this.options.resolution.height)
        }
    }
  
    /**
     * register a system
     * @param  {System} systems
     */
    registerSystem (systems: Function|System|any) {
        for (let i = 0; i < systems.length; i++) {
            const system = systems[i]
            this.systems.push(system)
        }
    }

    /**
     * Register scene
     * @param  {Scene} scene
     * @param  {} id=''
     */
    registerScene (sceneClasses: Array<Function|Scene|any>, id: string|undefined) {
        for (let i = 0; i < sceneClasses.length; i++) {
            const scene = sceneClasses[i];
            if (typeof scene === 'function' && /^\s*class\s+/.test(scene.toString())) {
                this.sceneManager.add((new scene(this.getContext())), id)
            }
        }
    }

    /**
     * Get Content
     */
    public getContext (): IGame2DContext {
        return {
            game: this,
            screen: this.screen,
            canvas: this.screen.canvas,
            time: this.time,
            scene: this.activeScene
        }
    }
    
    /**
     * Start game
     * @param  {Scene} scene
     */
    public start (sceneClass: Function|Scene|any) {
        const scene = this.sceneManager.get(sceneClass)
        if (!scene) return
        this.activeScene = scene

        // create system
        for (let i = 0; i < this.systems.length; i++) {
            this.systemsRunning[i] = new (this.systems[i])(this.getContext())
        }

        // create scene
        if (scene) {
            // preload scene
            try {
                if (typeof scene.preload === 'function') {
                    scene.preload()
                }
            } catch (error) {
                console.warn(`Error on preload scene`, scene)
                console.error(error)
            }

            // create scene
            try {
                if (typeof scene.create === 'function') {
                    scene.create()
                }
            } catch (error) {
                console.warn(`Error on create scene`, scene)
                console.error(error)
            }
            
            // start scene
            try {
                if (typeof scene.start === 'function') scene.start()
            } catch (error) {
                console.warn(`Error on start scene`, scene)
                console.error(error)
            }

            // run game loop
            requestAnimationFrame(this.gameLoop.bind(this))
        }
    }
    
    /**
     * Game Loop
     */
    public gameLoop () {
        const now = performance.now()
        this.time.delta = (now - this.time.last) / 1000
        this.time.fps = Math.round(1 / this.time.delta)

        // update entities in scene
        const scene = this.activeScene
        if (scene) {
            // preload scene
            try {
                if (typeof scene.update === 'function') scene.update()
            } catch (error) {
                console.warn(`Error on update scene`, scene)
                console.error(error)
            }
            scene.entityManager.runLifeCycle('update', this.getContext())
        }

        // clear screen
        this.clearScreen()

        // run systems
        for (let i = 0; i < this.systems.length; i++) {
            const system = (this.systemsRunning[i])
            system.execute(this.getContext())
        }

        // loop
        requestAnimationFrame(this.gameLoop.bind(this))
        this.time.last = performance.now()
        this.time.frame++
    }
}
