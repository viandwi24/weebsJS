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
     * create
     */
    create(context: IGame2DContext) { }

    /**
     * Start
     */
    start(context: IGame2DContext) { }

    /**
     * Update
     */
    update(context: IGame2DContext) { }
}