import { HTTPResource, Resource, ResourceOptions, ResourceType } from "./Resource"

export class ResourceManager {
    resources: Array<Resource|HTTPResource>
    
    /**
     * Create a new resource manager
     */
    constructor() {
        this.resources = []
    }

    /**
     * @param  {string} name
     * @param  {string} url
     * @param  {ResourceType} type
     * @param  {ResourceOptions<ResourceType>} options
     */
    addHTTPResource(name: string, url: string, type: ResourceType, options: ResourceOptions<ResourceType>) {
        this.resources.push(new HTTPResource(name, url, type, options))
    }

    get<Type extends ResourceType>(name: string): Resource|undefined {
        return this.resources.find(r => r.name === name)
    }

    async load() {
        return Promise.all(this.resources.map(resource => resource.load()))
    }
}