import { IGameEngineContext } from "../Engine"

export interface IAnimationOptions {
    frames: Array<any>;
    frameRate?: number;
    loop?: boolean;
}
