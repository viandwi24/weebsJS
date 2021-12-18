export interface IResourceImageOptions {
    width?: number
    height?: number
}

export interface IResourceAudioOptions {
    src?: string
}

export interface IResourceMapOptions {
    src?: string
}

export enum ResourceType {
    IMAGE = 'IMAGE',
    AUDIO = 'AUDIO',
    MAP = 'MAP'
}

export type ResourceOptions<T> = T extends ResourceType.IMAGE ? IResourceImageOptions : T extends ResourceType.AUDIO ? IResourceAudioOptions : IResourceMapOptions

export class Resource {
    dom: CanvasImageSource | undefined
    
    constructor(public name: string, public type: ResourceType, public options: ResourceOptions<ResourceType>) { 
    }

    getDom<T extends CanvasImageSource>(): T {
        if (!this.dom) {
            if (this.type == ResourceType.IMAGE) {
                return document.createElement('img') as T
            } else if (this.type == ResourceType.AUDIO) {
                return document.createElement('audio') as T
            } else {
                return document.createElement('img') as T
            }
        } else {
            return this.dom as T
        }
    }

    load() {
        return new Promise<void>((resolve, reject) => resolve())
    }
}

export class HTTPResource extends Resource {
    constructor(public name: string, public url: string, public type: ResourceType, public options: ResourceOptions<ResourceType>) {
        super(name, type, options)
    }

    load() {
        if (this.type === ResourceType.IMAGE) {
            return new Promise<void>((resolve, reject) => {
                const img = new Image()
                img.onload = () => {
                    resolve()
                    this.dom = img
                }
                img.onerror = () => reject(new Error('Failed to load image'))
                img.src = this.url
            })
        }

        return new Promise<void>((resolve, reject) => resolve())
    }
}
