import { EntityAnimationManager } from './../Animation/Manager';
import { Component } from "../Component/Component"
import { Transform } from "../Component/Transform"
import { IGameEngineContext } from "../Engine"
import { Resource } from "../Resource/Resource"
import { Vector2 } from "./Vector2"

export interface IEntityComponents {
    name: string;
    component: Component;
}

export class Entity {
    priority: number = 10
    components: Array<IEntityComponents>
    AnimationManager: EntityAnimationManager

    constructor(public name: string, public resource: Resource) {
        this.components = []
        this.AnimationManager = new EntityAnimationManager()
        this.addComponent('Transform', new Transform())
    }

    addComponent(name: string, component: Component) {
        this.components.push({
            name,
            component
        })
    }
    
    getComponent<T extends Component>(name: string): T {
        return this.components.find(c => c.name === name)?.component as T
    }

    update(GameContext: IGameEngineContext) {
    }

    draw(GameContext: IGameEngineContext) {
    }
}