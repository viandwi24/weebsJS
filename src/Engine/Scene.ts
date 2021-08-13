import { IGame2DContext, EntityManager, Entity } from '../index'

/**
 * Create Scene Manager
 * @class SceneManager
 */
export class SceneManager {
    /**
     * Scene List
     */
    protected scenes: Array<Scene> = []

    /**
     * Add a new scene
     * @param  {Scene} scene
     * @param  {String|undefined} id
     */
    add (scene: Scene, id: string|undefined) {
        this.scenes.push(scene)
        if (id) {
            scene.setId(id)
        }
    }
    
    /**
     * Get a scene by id
     * @param  {String} id
     * @returns Scene
     */
    get (id: Function|Scene|any) : Scene|undefined {
        if (typeof id === 'function') {
            return this.scenes.find(scene => scene.getId() === id.name)
        } else {
            return this.scenes.find(scene => scene.getId() === id)
        }
    }
}


/**
 * Create Scene
 * @class Scene
 */
export class Scene {
    /**
     * Id scene
     */
    protected id: string

    /**
     * Entity Manager
     */
    public entityManager: EntityManager = new EntityManager()
    
    /**
     * Create a scene
     */
    constructor (context: IGame2DContext) {
        this.id = this.constructor.name
    }

    /**
     * Set id scene
     * @param  {String} id
     */
    public setId (id: string) {
      this.id = id
    }

    /**
     * Set id scene
     * @param  {String} id
     */
    public getId () : string {
      return this.id
    }

    /**
     * Add a new entity
     * @param  {String} id
     */
    addEntity (entity: Entity, id: string|undefined) {
        return this.entityManager.add(entity, id)
    }
  
    /**
     * Preload
     */
    preload () {}
  
    /**
     * Start
     */
    start () {}
    
    /**
     * Preload
     */
    create () {}
  
    /**
     * Update
     */
    update () {}
}