import { IGame2DContext } from "./Game2D";
/**
 * Create Component Manager
 * @class ComponentManager
 */
export declare class ComponentManager {
    /**
     * Component List
     */
    components: Array<Component>;
    /**
     * Add a new component
     * @param  {Component} component
     * @param  {String|undefined} id
     */
    add(component: Component, id: string | undefined): void;
    /**
     * Get a component by id
     * @param  {String} id
     * @returns {Component|undefined}
     */
    get(id: string): Component | undefined;
}
/**
 * Create Component
 * @class Component
 */
export declare class Component {
    /**
     * Id component
     */
    protected id: string;
    /**
     * Create a component
     */
    constructor();
    /**
     * Set id component
     * @param  {String} id
     */
    setId(id: string): void;
    /**
     * Set id component
     * @param  {String} id
     */
    getId(): string;
    /**
     * create
     */
    create(context: IGame2DContext): void;
    /**
     * Start
     */
    start(context: IGame2DContext): void;
    /**
     * Update
     */
    update(context: IGame2DContext): void;
}
