import { ComponentManager, Component, Game2D } from "../index"
import { IGame2DContext } from "./Game2D"

/**
 * Create Entity Manager
 * @class EntityManager
 */
export class EntityManager {
    /**
     * Entity List
     */
    public entities: Array<Entity> = []

    constructor (public game: Game2D) {
    }

    /**
     * Add a new entity
     * @param  {Entity} entity
     * @param  {String|undefined} id
     */
    public add(entity: Entity, id: string | undefined) {
        this.entities.push(entity)
        entity.create(this.game.getContext())
        if (id) {
            entity.setId(id)
        }
        entity.start(this.game.getContext())
    }

    /**
     * Get a entity by id
     * @param  {String} id
     * @returns {Entity|undefined}
     */
    public get(id: string): Entity | undefined {
        return this.entities.find(entity => entity.getId() === id)
    }

    /**
     * Get a entity by id
     * @param  {String} id
     * @returns {Entity|undefined}
     */
    public destroy(id: string|Entity) {
        const entityId = (typeof id === 'string') ? id : id.getId()
        const findIndex = this.entities.findIndex(entity => entity.getId() === entityId)
        this.entities.splice(findIndex, 1)
        return findIndex
    }

    /**
     * Run lifecycle
     * @param  {string} entityId
     * @param  {string} method
     * @param  {object} context
     */
    public runLifeCycle(method: string, context: IGame2DContext) {
        // console.log(this.entities.length)
        for (let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i]
            if (entity) {
                // entity
                try {
                    if (typeof entity.create === 'function' && method === 'create') entity.create(context)
                    if (typeof entity.start === 'function' && method === 'start') entity.start(context)
                    if (typeof entity.update === 'function' && method === 'update') entity.update(context)
                } catch (error) {
                    console.warn(`Error on ${method} entity`, entity)
                    console.error(error)
                }

                // component
                for (let j = 0; j < entity.componentManager.components.length; j++) {
                    const component: Component = entity.componentManager.components[j]
                    if (component) {
                        try {
                            if (typeof component.create === 'function' && method === 'create') component.create(context, entity)
                            if (typeof component.start === 'function' && method === 'start') component.start(context, entity)
                            if (typeof component.update === 'function' && method === 'update') component.update(context, entity)
                        } catch (error) {
                            console.warn(`Error on ${method} component`, component)
                            console.error(error)
                        }
                    }
                }
            }
        }
    }

  
    /**
     * Get Entity has a component
     * @param  {} component
     */
    public getEntityHasComponent(component: Array<string>) {
        const components = (typeof component === 'string') ? [component] : component
        return this.entities.filter(entity => {
            let foundCount = 0 
            
            for (let i = 0; i < components.length; i++) {
                const component = components[i];
                if (entity && (entity.getComponent(component) !== undefined)) {
                    foundCount++
                }
            }

            return (foundCount === components.length)
        })
    }
}


/**
* Create Entity
* @class Entity
*/
export class Entity {
    /**
     * Id entity
     */
    protected id: string

    /**
     * Component Manager
     */
    public componentManager: ComponentManager = new ComponentManager()

    /**
     * Create a entity
     */
    constructor() {
        this.id = this.constructor.name
    }

    /**
     * Set id entity
     * @param  {String} id
     */
    setId(id: string) {
        this.id = id
    }

    /**
     * Set id entity
     * @param  {String} id
     */
    getId(): string {
        return this.id
    }

    /**
     * Add a new component
     * @param  {String} id
     */
    addComponent(component: Component, id: string | undefined) {
        return this.componentManager.add(component, id)
    }
  
    /**
     * Destroy
     */
    destoyEntity () {
        console.log('destroyed')
    }

    /**
     * Get component
     * @param  {String} id
     */
    getComponent(id: string): Component | undefined {
        return this.componentManager.get(id)
    }
    
    /**
     * create
     */
    create (context: IGame2DContext) {}
  
    /**
     * Start
     */
    start (context: IGame2DContext) {}
  
    /**
     * Update
     */
    update (context: IGame2DContext) {}
}