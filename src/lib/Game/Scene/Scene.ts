import { IGameEngineContext } from "../Engine"
import { Entity } from "../Entity/Entity"
import { SpriteSheet, ISpriteSheetOptions } from "../Entity/SpriteSheet"
import { ResourceType } from "../Resource/Resource"

export interface IScene {
    GameContext: IGameEngineContext;
    objects: Array<Entity>;
    update(context: IGameEngineContext): void;
    draw(context: IGameEngineContext): void;
}

export class Scene implements IScene {
    GameContext: IGameEngineContext
    objects: Array<Entity> = []

    constructor(public name: string, ctx: IGameEngineContext) {
        this.GameContext = ctx
    }

    addSpriteSheet(name: string, resourceName: string, options: ISpriteSheetOptions) {
        const resource = this.GameContext.ResourceManager.get<ResourceType.IMAGE>(resourceName)
        if (resource) {
            this.objects.push(
                new SpriteSheet(name, resource, options)
            )
            return this.getObject<SpriteSheet>(name)
        } else {
            throw new Error(`Resource ${resourceName} not found`)
        }
    }

    addObject<T extends Entity>(object: T) {
        this.objects.push(object)
        return this.getObject<T>(object.name)
    }

    getObject<T extends Entity>(name: string): T {
        return this.objects.find(o => o.name === name) as T
    }

    update(ctx: IGameEngineContext) {
        const sortedObjects = this.objects.sort((a, b) => a.priority - b.priority)
        sortedObjects.forEach(o => o.update(ctx))
    }

    draw(ctx: IGameEngineContext) {
        const sortedObjects = this.objects.sort((a, b) => a.priority - b.priority)
        sortedObjects.forEach(o => o.draw(ctx))
    }
}