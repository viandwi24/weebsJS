import { ComponentManager, Component } from "../index";
import { IGame2DContext } from "./Game2D";
/**
 * Create Entity Manager
 * @class EntityManager
 */
export declare class EntityManager {
    /**
     * Entity List
     */
    protected entities: Array<Entity>;
    /**
     * Add a new entity
     * @param  {Entity} entity
     * @param  {String|undefined} id
     */
    add(entity: Entity, id: string | undefined): void;
    /**
     * Get a entity by id
     * @param  {String} id
     * @returns {Entity|undefined}
     */
    get(id: string): Entity | undefined;
    /**
     * Run lifecycle
     * @param  {string} entityId
     * @param  {string} method
     * @param  {object} context
     */
    runLifeCycle(method: string, context: IGame2DContext): void;
    /**
     * Get Entity has a component
     * @param  {} component
     */
    getEntityHasComponent(component: Array<string>): Entity[];
}
/**
* Create Entity
* @class Entity
*/
export declare class Entity {
    /**
     * Id entity
     */
    protected id: string;
    /**
     * Component Manager
     */
    componentManager: ComponentManager;
    /**
     * Create a entity
     */
    constructor();
    /**
     * Set id entity
     * @param  {String} id
     */
    setId(id: string): void;
    /**
     * Set id entity
     * @param  {String} id
     */
    getId(): string;
    /**
     * Add a new component
     * @param  {String} id
     */
    addComponent(component: Component, id: string | undefined): void;
    /**
     * Get component
     * @param  {String} id
     */
    getComponent(id: string): Component | undefined;
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
