import { Scene, SceneManager, System } from '../index';
export interface IGame2DOptions {
    resolution: {
        width: number;
        height: number;
    };
}
export interface IGame2DScreen {
    dom: HTMLElement | undefined;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | undefined;
}
export interface IGame2DTime {
    last: number;
    delta: number;
    fps: number;
    frame: number;
}
export interface IGame2DContext {
    game: Game2D;
    screen: IGame2DScreen;
    canvas: HTMLCanvasElement;
    time: IGame2DTime;
    scene: Scene | undefined;
}
export declare const Game2DDefaultOptions: IGame2DOptions;
/**
 * Create Game 2D
 * @class Game2D
 */
export declare class Game2D {
    /**
     * Screen
     * @type {IGame2DScreen}
     */
    protected options: IGame2DOptions;
    /**
     * Systems
     * @type {Array<System>}
     */
    protected systems: Array<Function | void | any>;
    /**
     * Systems
     * @type {Array<System>}
     */
    protected systemsRunning: Array<System>;
    /**
     * Screen
     * @type {IGame2DScreen}
     */
    protected screen: IGame2DScreen;
    /**
     * SceneManager
     * @type {IGame2DScreen}
     */
    protected sceneManager: SceneManager;
    /**
     * SceneManager
     * @type {IGame2DScreen}
     */
    protected activeScene: Scene | undefined;
    /**
     * Time
     * @type {IGame2DTime}
     */
    protected time: IGame2DTime;
    /**
     * Create new 2D Game
     * @param  {IGame2DOptions} options
     */
    constructor(gameOptions?: IGame2DOptions | undefined);
    /**
     * Creating virtual canvas
     */
    protected createCanvas(): void;
    /**
     * Mount virtual canvas to screen for display game
     * @param  {HTMLElement} screen
     */
    mount(screen: HTMLElement): void;
    /**
     * Clear screen
     */
    clearScreen(): void;
    /**
     * register a system
     * @param  {System} systems
     */
    registerSystem(systems: Function | System | any): void;
    /**
     * Register scene
     * @param  {Scene} scene
     * @param  {} id=''
     */
    registerScene(sceneClasses: Array<Function | Scene | any>, id: string | undefined): void;
    /**
     * Get Content
     */
    protected getContext(): IGame2DContext;
    /**
     * Start game
     * @param  {Scene} scene
     */
    start(sceneClass: Function | Scene | any): void;
    /**
     * Game Loop
     */
    gameLoop(): void;
}
