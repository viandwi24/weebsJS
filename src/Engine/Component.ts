import { Entity } from "./Entity"
import { IGame2DContext } from "./Game2D"

/**
 * Create Component Manager
 * @class ComponentManager
 */
export class ComponentManager {
    /**
     * Component List
     */
    public components: Array<Component> = []

    /**
     * Add a new component
     * @param  {Component} component
     * @param  {String|undefined} id
     */
    add(component: Component, id: string | undefined) {
        this.components.push(component)
        if (id) {
            component.setId(id)
        }
    }

    /**
     * Get a component by id
     * @param  {String} id
     * @returns {Component|undefined}
     */
    get(id: string): Component | undefined {
        return this.components.find(component => component.getId() === id)
    }
}


/**
 * Create Component
 * @class Component
 */
export class Component {
    /**
     * Id component
     */
    protected id: string

    /**
     * Create a component
     */
    constructor() {
        this.id = this.constructor.name
    }

    /**
     * Set id component
     * @param  {String} id
     */
    setId(id: string) {
        this.id = id
    }

    /**
     * Set id component
     * @param  {String} id
     */
    getId(): string {
        return this.id
    }

    /**
     * Get state 
     * <T, K extends keyof T>
     * @returns {Object
     */
    getState(): { [key: string]: any } {
        const states: { [key: string]: any } = {}
        const a = Object.getOwnPropertyNames(this)
        const $this: { [key: string]: any } = this
        for (let i = 0; i < a.length; i++) {
          const b: any = a[i];
          if (b) {
            states[b] = $this[b]
          }
        }
        return states
    }

    /**
     * create
     */
    create(context: IGame2DContext, entity: Entity) { }

    /**
     * Start
     */
    start(context: IGame2DContext, entity: Entity) { }

    /**
     * Update
     */
    update(context: IGame2DContext, entity: Entity) { }
}