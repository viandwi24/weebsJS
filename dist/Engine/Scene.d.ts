import { IGame2DContext, EntityManager, Entity } from '../index';
/**
 * Create Scene Manager
 * @class SceneManager
 */
export declare class SceneManager {
    /**
     * Scene List
     */
    protected scenes: Array<Scene>;
    /**
     * Add a new scene
     * @param  {Scene} scene
     * @param  {String|undefined} id
     */
    add(scene: Scene, id: string | undefined): void;
    /**
     * Get a scene by id
     * @param  {String} id
     * @returns Scene
     */
    get(id: Function | Scene | any): Scene | undefined;
}
/**
 * Create Scene
 * @class Scene
 */
export declare class Scene {
    /**
     * Id scene
     */
    protected id: string;
    /**
     * Entity Manager
     */
    entityManager: EntityManager;
    /**
     * Create a scene
     */
    constructor(context: IGame2DContext);
    /**
     * Set id scene
     * @param  {String} id
     */
    setId(id: string): void;
    /**
     * Set id scene
     * @param  {String} id
     */
    getId(): string;
    /**
     * Add a new entity
     * @param  {String} id
     */
    addEntity(entity: Entity, id: string | undefined): void;
    /**
     * Preload
     */
    preload(): void;
    /**
     * Start
     */
    start(): void;
    /**
     * Preload
     */
    create(): void;
    /**
     * Update
     */
    update(): void;
}
